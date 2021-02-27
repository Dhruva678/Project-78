var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://st.depositphotos.com/1667027/3700/v/950/depositphotos_37007129-stock-illustration-mother-and-baby.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg",];
var names = ["Family Book","Vidya Shirsath",
"Ajay Shirsath",
"Kaushik Shirsath",];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
