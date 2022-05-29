// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

firstUser.name = "Monica"
firstUser.gender = "Female"
firstUser.age = 17
firstUser.email = "monica@dingdong.com"
firstUser.isHavePet = true

firstUser.favoriteColor = []
firstUser.favoriteColor.push("Yellow", "Pink", "White", "Purple")

const educations1 = []

educations1[0] = {
    name: "SD 01", city: "Jakarta", graduate: 2016
}
educations1[1] = {
    name: "SMP 02", city: "Jakarta", graduate: 2019
}
educations1[2] = {
    name: "SMA 03", city: "Tangerang"
}

firstUser.education = educations1

firstUser.favoriteRestaurant = []
firstUser.favoriteRestaurant.push("Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok")

secondUser.name = "Wendy"
secondUser.gender = "Male"
secondUser.age = 23
secondUser.email = "wendy@dingdong.com"

secondUser.isHavePet = false

secondUser.favoriteColor = []
secondUser.favoriteColor.push("Blue", "Black", "Grey")

const educations2 = []
educations2[0] = {
    name: "SD 02", city: "Jakarta", graduate: 2010
}
educations2[1] = {
    name: "SMP 03", city: "Bogor", graduate: 2013
}
educations2[2] = {
    name: "SMA 01", city: "Surabaya", graduate: 2016
}
educations2[3] = {
    name: "Universitas Maju", city: "Tangerang"
}

secondUser.education = educations2

secondUser.favoriteRestaurant = []
secondUser.favoriteRestaurant.push("Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Eggy")

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};