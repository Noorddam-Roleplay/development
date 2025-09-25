export default {
    // Fallback message (zichtbaar als embed niet werkt)
    message: "Nieuwe commit in {{ github.context.payload.repository.full_name }}: {{ commit.title }}",

    embed: {
        title: "{{ commit.title }}",               // commit title als embed title
        description: "{{ commit.description }}",  // commit description/body
        url: "{{ commit.url }}",                   // link naar commit
        footer: {
            text: "{{ commit.author.name }}",     // auteur in footer
            icon_url: "https://github.com/{{ commit.author.username }}.png" // profielfoto
        }
    }
}
