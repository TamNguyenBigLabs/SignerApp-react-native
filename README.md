# SignerApp-react-native
Demo interprocess communication via Deep Link using React Native framework

### Receiving data from outside
- Receive scheme format: `solosigner://sign/{caller_id}/{something}`
    - `{caller_id}`: Identification of the caller
    - `{something}`: message from the caller
- Android configuration
    - scheme: `solosigner`
    - host: `sign`
- iOS configuration
    - CFBundleURLSchemes: `solosigner`

### Return data to the caller
- Return scheme format: `solowallet://result/{caller_id}/{something}`
    - `{caller_id}`: Identification of the caller
    - `{something}`: response message return to the caller
