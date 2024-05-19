import { defineStore } from 'pinia';

const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "simply", "dummy", "text"]
function getRandomSentence() {
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

export const useApiStore = defineStore('api', {
    state: () => ({
        // isLoading: false,
        appConfig: {
            logo: 'https://i.imgur.com/sOCVfKv.png',
            title: 'Hieu Tran',
            description: 'SmileGate test code',
        },

        cards: {
            total: 100,
            data: [],
        },
    }),

    getters: {
        cardData: (state) => state.cards.data
    },

    actions: {
        async fetchAppConfig() {
            const delay = 2000;

            return new Promise((resolve) => setTimeout(() => resolve(this.appConfig), delay));
        },
        async fetchCards(count = 30) {
            const delay = 3000;

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
                    title: getRandomSentence(),
                    image: ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) ? image.landscape : image.portrait
                });
            }
            this.cards = result
            return new Promise((resolve) => setTimeout(() => resolve(result), delay));
        },
    },
})


