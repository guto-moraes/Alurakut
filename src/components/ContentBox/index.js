import styled from "styled-components";

const ContentBoxWrapper = styled.div`
    width: 100%;
`;

const ContentBox = styled.section`
    min-height: 11.125rem;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;

    &:not(:last-child) {
        margin-bottom: 0.625rem;
    }

    .welcome {
        font-size: 1.75rem;
        font-weight: 400;
        color: #333;
    }

    .good-lucky {
        font-size: 0.875rem;
        font-weight: 400;
        color: #999;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        strong {
            font-weight: 500;
        }
    }

    .what-do-you-do {
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.375rem;
        color: #333;
        margin-bottom: 1.25rem;
    }

    .actions-content-list {
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
            &:not(:last-child) {
                margin-right: 1.5rem;
            }

            .section {
                font-size: 0.825rem;
                font-style: italic;
                font-weight: 400;
                color: #5a5a5a;
                margin-bottom: 0.188rem;
            }

            .icon-count {
                display: flex;
                justify-content: flex-start;
                align-items: center;

                .total {
                    font-size: 0.875rem;
                    font-style: italic;
                    color: #2e7bb4;
                    margin: 0.25rem 0 0 0.25rem;
                }
            }
        }
    }

    .community-name {
        margin-top: 1rem;

        input {
            width: 100%;
            font-size: 0.75rem;
            line-height: 0.875rem;
            color: #333;
            padding: 0.75rem 1rem;
            background: #f4f4f4;
            border-radius: 2rem;            
            border: 0;

            &::placeholder {
                font-size: 0.75rem;
                line-height: 0.875rem;
                color: #333;
                padding: 0.75rem 1rem;
            }
        }
    }
`;

export { ContentBoxWrapper, ContentBox };
