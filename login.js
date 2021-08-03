function adduser() {
    player1_name = document.getElementById("player1_name").vale;
    player2_name = document.getElementById("player2_name").vale;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "game.html";
}
