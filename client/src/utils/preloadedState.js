export function getInitialState() {
    const authState = JSON.parse(localStorage.getItem('user'));

    return {
        auth: {
            authState
        }
    }
}
