function search(input, index){
  $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + input + "&maxResults=40&index=" + index,
      dataType: "JSON"
  }).done(function(data) {
    return data;
  }).fail(function(data) {
    console.log(data);
  });
}

export default {search};
