export const handler = (req, res) => {
    try {
        res.send("hello from login handler")
    } catch (error) {
        console.log(error);

    }
}