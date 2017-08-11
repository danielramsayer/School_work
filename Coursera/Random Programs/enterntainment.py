import classmedia
import fresh_tomatoes
import webbrowser

toy_story = classmedia.Movie("Toy Story",
                             "The story of a boy and his toys which come to life.",
                             "http://img.lum.dolimg.com/v1/images/open-uri20150422-20810-m8zzyx_5670999f.jpeg?region=0,0,300,450",
                             "https://www.youtube.com/watch?v=KYz2wyBy3kc")

avatar = classmedia.Movie("Avatar",
                         "A space version of Dancing with Wolves.",
                         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
                         "https://www.youtube.com/watch?v=5PSNL1qE6VY")

kingsmen = classmedia.Movie("Kingsmen", "The story of hoody boy becoming a gentlemen spy.",
                            "http://www.loyolaphoenix.com/wp-content/uploads/2015/03/sq_kingsman_the_secret_service_ver7.jpg",
                            "https://www.youtube.com/watch?v=kl8F-8tR8to")
#kingsmen.show_trailer()

movies = [toy_story, avatar, kingsmen] 
#fresh_tomatoes.open_movies_page(movies)
#print (classmedia.Movie.VALID_RATINGS)
print (classmedia.Movie.__module__)
