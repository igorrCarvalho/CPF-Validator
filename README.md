# CPF Validator App

## Overview

**CPF Validator** is a FullStack application that allows users to enter a Brazilian CPF (Cadastro de Pessoas Físicas) number and verify if it’s valid. The application provides a single route to validate CPF numbers based on Brazilian CPF validation rules.

## How It Works

2. **Length and Pattern Check**: It ensures the CPF has exactly 11 digits and isn’t a sequence of repeating numbers.
3. **Verification Digit Calculation**: Calculates two verification digits to confirm CPF validity.

## Routes

### POST `/api/validate-cpf`

- **Description**: Validates a CPF number provided in the request.
- **Request**:
  - **Method**: `POST`
  - **URL**: `/api/validate-cpf`
  - **Body**:
    ```json
    { "cpf": "string" }
    ```
    - `cpf`: The CPF number to validate, as a string (e.g., `"12345678909"`).
- **Response**:
  - JSON object:
    ```json
    { "isValid": true | false }
    ```
    - `isValid`: A boolean indicating if the CPF is valid (`true`) or invalid (`false`).

## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:igorrCarvalho/CPF-Validator.git
   cd CPF-Validator

## Build

1. **Start both backend and frontend docker containers**:
   ```bash
   cd src
   docker-compose up -d

  The app will be hosted in localhost:3000
