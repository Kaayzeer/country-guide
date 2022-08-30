//styled-components
import styled from "styled-components";

export const StyledContainer = styled.section`
  max-width: 1200px;
  padding-right: 40px;
  padding-left: 40px;
  margin: 0 auto;
  height: 100vh;

  .buttonWrapper {
    margin: 4rem 0;
    display: flex;
    position: relative;

    .back {
      border: none;
      outline: none;
      padding: 0.5rem;
      padding-left: 2.4rem;
      padding-right: 1rem;
      text-transform: capitalize;
      cursor: pointer;
      border-radius: 4px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      background-color: ${({ theme }) => theme.elements};
      color: ${({ theme }) => theme.text};
      &:hover {
        opacity: 0.7;
        transition: all 0.3s ease;
      }
    }

    .arrow {
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-50%);
    }
  }

  .details {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.7px;

    @media screen and (min-width: 1015px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .imgWrapper {
      width: 100%;
    }

    img {
      height: 150px;

      @media screen and (min-width: 500px) {
        height: 250px;
      }

      @media screen and (min-width: 800px) {
        height: 300px;
      }
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;

    @media screen and (min-width: 400px) {
      padding-left: 1rem;
    }

    @media screen and (min-width: 1015px) {
      padding-left: 3rem;
      justify-content: center;
    }

    .name {
      font-size: 24px;
      font-weight: 800;
    }
  }

  .overall {
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    @media screen and (min-width: 800px) {
      height: 250px;
    }

    p {
      font-size: 14px;
      font-weight: 600;

      span {
        font-weight: 200;
        margin-left: 5px;
      }
    }
  }

  .borderCountries {
    display: flex;
    gap: 5px;
  }
`;
