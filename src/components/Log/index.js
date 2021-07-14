import styled from "styled-components";

const UserLog = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;

    span {
        font-size: 0.875rem;
        font-weight: 500;
        color: #2f4a71;

        &:not(:last-child)::after {
            content: "";
            height: 0.75rem;
            border: thin solid #5292c1;
            flex: none;
            order: 1;
            flex-grow: 0;
            margin: 0 0.75rem;
        }
    }

    a {
        font-size: 0.75rem;
        color: #fff;
        text-decoration: none;
    }
`;

export default UserLog;
