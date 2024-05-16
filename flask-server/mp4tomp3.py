from moviepy.editor import * 
from pytube import YouTube

def download_video(link):
    yt = YouTube(link)
    yt.streams.first().download()
    return yt

def mp4_to_mp3(mp4, mp3):     
    mp4_without_frames = AudioFileClip(mp4)     
    mp4_without_frames.write_audiofile(mp3)     
    mp4_without_frames.close() # function call mp4_to_mp3("my_mp4_path.mp4", "audio.mp3")

def main():
    yt = download_video('https://www.youtube.com/watch?v=YbMrRegZ3H0')
    VIDEO_FILE_PATH = yt.title + ".mp4"
    AUDIO_FILE_PATH = yt.title + ".mp3"
    mp4_to_mp3(VIDEO_FILE_PATH, AUDIO_FILE_PATH)

main()