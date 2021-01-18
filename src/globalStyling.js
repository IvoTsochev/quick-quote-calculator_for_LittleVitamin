import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  padding: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

export const QuestionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
