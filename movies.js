// shift + Alt + down arrow == copy the line to down

 const movies = [
  {title : 'a' , year : 2018, rating : 4.5} , 
  {title : 'b' , year : 2018, rating : 4.7} , 
  {title : 'c' , year : 2018, rating : 3 } , 
  {title : 'd' , year : 2018, rating : 4.5} , 
  {title : 'e' , year : 2018, rating : 5.5} , 
 ];

 // Get All the movies in 2018 with rating > 4
 // sort them by their rating
 // Descending order
 // Pick their tiles only and display them on the console

const titles = movies.filter(m => m.year === 2018 && m.rating >= 4)
      .sort((a,b) => a.rating - b.rating)
      .reverse()
      .map(m => m.title)

console.log(titles);