export function getInitialState() {
    const authState = JSON.parse(sessionStorage.getItem('user'));

    return {
        auth: {
            authState
        }
    }
}
