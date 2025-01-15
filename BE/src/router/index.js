export default function routes(app) {
    app.use('/', (req, res) => {
        res.send('Hello world')
    })
}