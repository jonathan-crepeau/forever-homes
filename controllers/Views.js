const root = (req, res) => {
    res.sendFile('/views/homepage.html', {
        root: `${__dirname}/../`
    });
};
const test = (req, res) => {
    res.json({
        status: 200,
        message: "Test Views route successful.."
    });
};
const login = (req, res) => {
    res.sendFile('/views/login.html', {
        root: `${__dirname}/../`
    });
};
const profile = (req, res) => {
    res.sendFile('/views/profile.html', {
        root: `${__dirname}/../`
    });
};
const search = (req, res) => {
    res.sendFile('/views/search.html', {
        root: `${__dirname}/../`
    });
};
const signup = (req, res) => {
    res.sendFile('/views/signup.html', {
        root: `${__dirname}/../`
    });
};
export { root, test, login, profile, search, signup };
