from moviepy.editor import * 
from pytube import YouTube, request
import socket
import logging
from urllib import parse
from urllib.error import URLError
from urllib.request import Request, urlopen
import http.client
import json
import io
from pytube.exceptions import RegexMatchError, MaxRetriesExceeded
default_range_size = 9437184 


logger = logging.getLogger(__name__)

def download_video(link):
    yt = YouTube(link)
    # try to figure out how a stream object works
    # See C:\Users\Ethan\AppData\Local\Programs\Python\Python310\Lib\site-packages\pytube\request.py and look at func stream()
    # Looks like YouTube() finds the url, streams() takes the info and returns a StreamQuery() object which returns an array of streaming objects,
    # first() takes the steraming object propert of StreamQuery opbject, and then download() downloads the audio by using request.stream() to do all the weird bit operations 
    testing = yt.streams.first()
    # request.stream(link)
    # print(testing.url)
    testing.download()
    return yt

def download_to_buffer(link):
    yt = YouTube(link)
    testing = yt.streams.first()
    ytstream =  request.stream(testing.url)
    return ytstream

def mp4_to_mp3(mp4, mp3):     
    mp4_without_frames = AudioFileClip(mp4)     
    mp4_without_frames.write_audiofile(mp3)     
    mp4_without_frames.close() # function call mp4_to_mp3("my_mp4_path.mp4", "audio.mp3")


def main():
    # yt = download_to_buffer('https://www.youtube.com/watch?v=EqM8fC8bYQo')
    # print(yt)
    yt = download_video('https://www.youtube.com/watch?v=EqM8fC8bYQo')
    VIDEO_FILE_PATH = yt.title + ".mp4"
    AUDIO_FILE_PATH = yt.title + ".mp3"
    mp4_to_mp3(VIDEO_FILE_PATH, AUDIO_FILE_PATH)

main()