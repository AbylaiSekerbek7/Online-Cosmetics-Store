var usersArray = [
    new User("Иван", "Ivan1", "Ivan1", "ivan1@gmail.com", "Астана", "+123456789", "черный"),
    new User("Иван", "Ivan2", "Ivan2", "ivan2@gmail.com", "Алматы", "+987654321", "рыжий"),
    new User("Иван", "Ivan3", "Ivan3", "ivan3@gmail.com", "Atyrau", "+111111111", "белый"),
];

localStorage.setItem("Users", JSON.stringify(usersArray));