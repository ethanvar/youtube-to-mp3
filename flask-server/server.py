from flask import Flask, send_from_directory, abort, jsonify

import os

app = Flask(__name__)

audio_path = 'D:\cakewalk\samples'


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

if __name__ == "__main__":
    app.run(debug=True)