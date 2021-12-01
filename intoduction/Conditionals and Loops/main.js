// v-if
const ConditionalRendering = {
    data() {
        return {
            seen: true
            // You can change seen from true to false to check the effect
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')


// v-for
const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')
