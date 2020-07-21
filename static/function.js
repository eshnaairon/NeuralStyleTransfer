function readURL1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview1').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview1').hide();
      $('#imagePreview1').fadeIn(650);
      var thisImage = reader.result;
      localStorage.setItem("imgData", thisImage);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload1").change(function () {
  readURL1(this);
});
function readURL2(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview2').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview2').hide();
      $('#imagePreview2').fadeIn(650);
      var thisImage2 = reader.result;
      localStorage.setItem("imgData2", thisImage2);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload2").change(function () {
  readURL2(this);
});
