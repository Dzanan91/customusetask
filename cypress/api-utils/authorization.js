export function getAccessToken() {
    cy.request(
        {
            url: 'https://api.dev.customuse.com/v1/auth/login',
            method: 'POST',
            body: {
                "username": "test_invited_user2@test.com",
                "password": "aFMbr2k23W3LMLr"
            }
        }
    ).then(response => {
        let loginToken = response.body.token
        return loginToken
    }).as('loginToken')
}