import { defineStore } from 'pinia'

export const searchStore = defineStore(
    'characters', {
    state: () => ({
        character_list: null
    }),
    actions: {
        setSearchResponse(response) {
            this.character_list= response
        },
    }
})