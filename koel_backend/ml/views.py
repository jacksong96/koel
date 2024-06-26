from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
import torch
import os
from opensoundscape.metrics import predict_multi_target_labels
from django.http import FileResponse
from .apps import MlConfig
import pandas as pd
import os.path

# Create your views here
class PredictAudioView(APIView): 
    permission_classes = [AllowAny]  # Allow this endpoint even withut logged in user
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        data = {'message': 'Hello, get world!'} # test
        return Response(data)
    
    def post(self,request): 
        '''to be abstracted away'''
        if 'audio' not in request.FILES:
            return Response({'error': 'No audio uploaded'}, status=status.HTTP_400_BAD_REQUEST)
        
        audio_file = request.FILES['audio']  # This is an instance of MIME (in-memory object)

        try: 
            # Save audio file temporarily
            temp_file_path = os.path.join(os.getcwd(), '\\tmp', audio_file.name)
            os.makedirs(os.path.dirname(temp_file_path), exist_ok=True)
            with open(temp_file_path, 'wb') as f:
                f.write(audio_file.read())

            # print(temp_file_path)

            # Load from MLconfig and make predictions
            predictions = MlConfig.model.predict([temp_file_path])
            
            # Clean up temp folder
            os.remove(temp_file_path)

            scores = predict_multi_target_labels(predictions, threshold=0.5) # filter predictions above thresh value
            scores = scores.loc[:, (scores != 0).any(axis=0)] # discard scores which are 0

            # print("nfnrifnri , ", type(scores), scores.columns, scores)

            # csv code
            # csv_file = BytesIO()
            scores_df = pd.DataFrame(scores)
            scores_df.to_csv('csv_outputs.csv', sep=',')

            data = {'scores': scores}

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # return Response(data)
        return Response(data)

class PredictWithCsvView(APIView): 
    permission_classes = [AllowAny]  # Allow this endpoint even withut logged in user
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        data = {'message': 'Hello, get world!'} # test
        return Response(data)
    
    def post(self,request): 
        
        try: 
            # Save audio file temporarily
           os.path.isfile('csv_outputs.csv')


        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # return Response(data)
        return FileResponse(open('csv_outputs.csv', 'rb'), as_attachment=True)