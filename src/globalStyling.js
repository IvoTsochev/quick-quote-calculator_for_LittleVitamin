import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  padding: 1rem;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 25px;
  color: white;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 150px;
  &:hover {
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
    transform: scale(1.03);
  }
  &:focus {
    outline-width: 0;
    transform: scale(0.8);
  }
  .btn-arrow {
    margin-right: 0.4rem;
  }
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