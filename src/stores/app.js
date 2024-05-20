import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appConfig: {
      logo: null,
      title: null,
      description: null,
    },

    cards: {
      total: 0,
      data: []
    }
  }),

  getters: {
    cardData: (state) => state.cards.data
  },

  actions: {
    async getAppConfig() {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Fake data
      this.appConfig = {
        logo: 'https://i.imgur.com/sOCVfKv.png',
        title: 'Hieu Tran',
        description: 'SmileGate test code',
      }
      return this.appConfig
    },

    async fetchCards(count = 30) {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Fake data
      const image = {
        landscape: 'https://i.imgur.com/unmma82.jpeg',
        portrait: 'https://i.imgur.com/2MM9Jqo.jpeg'
      };

      const result = {
        total: count,
        data: [],
      };

      for (let i = 0; i < count; i++) {
        result.data.push({
          id: i,
          title: this.getRandomSentence(),
          image: ((i + 1) % 2 === 0 && (i + 1) % 3 === 0) ? image.landscape : image.portrait
        });
      }
      this.cards = result
      return this.cards
    },

    getRandomSentence() {
      const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "simply", "dummy", "text"]
      const randomWords = [];
      const length = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
      }

      // Capitalize the first letter and add punctuation
      randomWords[0] = randomWords[0].charAt(0).toUpperCase() + randomWords[0].slice(1);
      return randomWords.join(" ").trim() + ".";
    }
  }

})
