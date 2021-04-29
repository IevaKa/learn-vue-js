const getRandonValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const value = getRandonValue(5, 12);
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      this.attackPlayer();
    },
    attackPlayer() {
      const value = getRandonValue(8, 15);
      this.playerHealth -= value;
      this.addLog("monster", "attack", value);
    },

    specialAttackMonster() {
      this.currentRound++;
      const value = getRandonValue(10, 25);
      this.monsterHealth -= value;
      this.addLog("player", "attack", value);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const value = getRandonValue(8, 20);
      if (this.playerHealth + value > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += value;
      }
      this.addLog("player", "heal", value);

      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLog(who, what, value) {
      this.logs.unshift({ who, what, value });
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarHealth() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarHealth() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
}).mount("#game");
