import webbrowser

class Video():
    

class Movie(Video):
    """This Class provides a way to store movie related information."""

    VALID_RATINGS = ["G", "PG", "PG-13", "R", "NC-17"]
    
    def __init__(self, movie_title, movie_storyline,movie_poster,movie_trialer):
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = movie_poster
        self.trailer_youtube_url = movie_trialer

    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)

class TV_show(Video):
