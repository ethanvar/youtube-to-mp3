from flask import Flask, send_from_directory, abort, jsonify, request
from moviepy.editor import * 
from flask_cors import CORS
from mp4tomp3 import download_video, mp4_to_mp3
# from mp4tomp3 import *

import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

audio_path = os.getcwd()


@app.route('/tracks')
def tracks():
   return jsonify({
        'message': "Hello World!",
    })

@app.route('/audio/<filename>')
def get_audio(filename):
    try:
        return send_from_directory(audio_path, filename, mimetype='audio/mpeg') 
    except FileNotFoundError:
        abort(404)

@app.route('/api/data', methods=['POST'])
def receive_link():
    data = request.json
    print(data.get('song'))
    yt = download_video(data.get('song'))
    VIDEO_FILE_PATH = yt.title + ".mp4"
    AUDIO_FILE_PATH = yt.title.replace(' ','-') + ".mp3"
    mp4_to_mp3(VIDEO_FILE_PATH, AUDIO_FILE_PATH)
    return jsonify({"url": "http://127.0.0.1:8800/audio/" + AUDIO_FILE_PATH, "name" : AUDIO_FILE_PATH})



if __name__ == "__main__":
    app.run(debug=True, port=8800)