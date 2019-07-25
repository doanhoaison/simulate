import styled from 'styled-components';

export default styled.div`
    margin: 5px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    min-height: 100vh;
    .form {
        &__content {
            h3 {
                text-align: center;
            }
            width: 700px;
            background: #a5dab5;
            margin: auto;
            padding: 100px;
            box-shadow: 1px 1px 3px rgba(0,0,0,0.4);

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