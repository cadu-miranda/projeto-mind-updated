export const isAuthenticated = () => {

    const token = localStorage.getItem('user_token')

    try {

        if (!token) {

            return false;
        }
    }

    catch (e) {

        console.log(e)
    }

    return true
}