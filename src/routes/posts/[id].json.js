// import db

export async function get({ params }) {
    // connect to db to fetch & parse data

    const posts = [
        { id: 1, title: 'some title', body: 'lorem ipsum' },
        { id: 2, title: 'some title 2', body: 'lorem ipsum' },
        { id: 3, title: 'some title 3', body: 'lorem ipsum' },
        { id: 4, title: 'some title 4', body: 'lorem ipsum' },
        { id: 5, title: 'some title 5', body: 'lorem ipsum' },
    ]

    const post = posts.find((g) => g.id == params.id)

    if (post) {
        return {
            status: 200,
            body: { post }
        }
    }

    return {
        status: 404
    }
}