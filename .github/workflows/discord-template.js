export default {
    embed: {
        title: "{{ commit.title }}",
        description: "{{ commit.description }}",
        url: "{{ commit.url }}",
        footer: {
            text: "{{ commit.author.name }}",
            icon_url: "https://github.com/{{ commit.author.username }}.png"
        }
    }
}
