from moviepy.editor import * 
from pytube import YouTube
default_range_size = 9437184 


def download_video(link):
    yt = YouTube(link)
    mp3f = yt.streams.filter(only_audio=True).all()
    mp3f[0].download()
    return yt

def mp4_to_mp3(mp4, mp3):     
    mp4_without_frames = AudioFileClip(mp4)     
    mp4_without_frames.write_audiofile(mp3)     
    mp4_without_frames.close() 


def main():
    yt = download_video('https://www.youtube.com/watch?v=GpSYDmYZgkA')
    VIDEO_FILE_PATH = yt.title + ".mp4"
    AUDIO_FILE_PATH = yt.title + ".mp3"
    mp4_to_mp3(VIDEO_FILE_PATH, AUDIO_FILE_PATH)
