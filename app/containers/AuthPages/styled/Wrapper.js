import styled from 'styled-components';

export default styled.div`
    margin: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    background-color: #a9a7a77a;
    padding-top: 40px;
    .form {
        &__content {
            h3 {
                text-align: center;
            }
            width: 500px;
            padding-bottom:100px;

            form {
                display: flex;
                flex-direction: column;
                .bp3-button {
                    margin: auto;
                    padding: 7px 15px;
                }
            }
        }
    }
`