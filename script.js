const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
    ];

    //Phương thức filter loại bỏ các giá trị undefined và null khỏi mảng players
    const fillteredPlayers = players.filter(
        (player) => player && player.name && player.goals);
    console.log(fillteredPlayers);

    //sử dụng toán tử optional chaining
    //sử dụng phương thức reduce() để tìm ra phần tử player có giá trị goals lớn nhất
    const playerWithMaxGoals = players.reduce((maxPlayer,player) => 
         player?.goals > maxPlayer?.goals ? player : maxPlayer
    );
    //Lấy name có goals lớn nhất 
    const playerNameWithMaxGoals = playerWithMaxGoals?.name;

    console.log(playerNameWithMaxGoals);
