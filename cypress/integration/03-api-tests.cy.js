
import { getAccessToken} from '../api-utils/authorization'
import { userData } from '../fixtures/test-data'


describe('API Tests', () => {

    beforeEach('Get and save token', () => {
        cy.restoreLocalStorage()
        getAccessToken()
    })

    afterEach(() => {
        cy.saveLocalStorage()
      })

    it('C1 Should upload media successfully', () => {
        cy.get('@loginToken').then(token => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'customuselogo.png');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(201)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response))
                  })
            })
        })
    })

    it('C2 Should not upload media with invalid authentication', () => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'customuselogo.png');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + userData.invalidToken,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(401)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response.body))
                  })
            })
    })

    it('C3 Should upload png media', () => {
        cy.get('@loginToken').then(token => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'customuselogo.png');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(201)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response))
                  })
            })
        })
    })

    it('C4 Should upload jpg media', () => {
        cy.get('@loginToken').then(token => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'jpgtest.jpg');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(201)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response))
                })
            })
        })
    })

    it('C5 Should upload jpeg media', () => {
        cy.get('@loginToken').then(token => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'jpegtest.jpeg');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(201)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response))
                })
            })
        })
    })

    it('C6 Should upload gif media', () => {
        cy.get('@loginToken').then(token => {
            cy.fixture('customuselogo.png', 'binary').then(image => {
                const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
                const formData = new FormData();
                formData.append('image', blob, 'animated-hi.gif');

                cy.request({
                    method: 'POST',
                    url: 'https://api.dev.customuse.com/v1/my-media',
                    body: formData,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'content-type': 'multipart/form-data'
                    },
                }).then(({ status }) => {
                    expect(status).to.eq(201)
                }).then((xhr) => {
                    cy.log(JSON.stringify(xhr.response))
                })
            })
        })
    })
})