export default {
    port: 1337,
    dbUri: "mongodb://127.0.0.1/rest",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDWA6XRpY4gW5vW5R4QbtJcyuK1
08qz0en06go1bSd6r/BQkiM++bheQWNe+/aidqjZ4ENrYtDI3M60RAW5hMEq3KMW
84/1iIwBp1W4togEyvcjCysy1d8Cx2vI2Cr5ckObCDhjWOMwRbQ/gz91tEdC2FhV
ykkx7Pwp1dxj0xkHjwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDWA6XRpY4gW5vW5R4QbtJcyuK108qz0en06go1bSd6r/BQkiM+
+bheQWNe+/aidqjZ4ENrYtDI3M60RAW5hMEq3KMW84/1iIwBp1W4togEyvcjCysy
1d8Cx2vI2Cr5ckObCDhjWOMwRbQ/gz91tEdC2FhVykkx7Pwp1dxj0xkHjwIDAQAB
AoGAS0szPoPhce7o7/zhy+RBbFYQ1umxafxTNFBW0R8bAaX+hUo0zkYrIDYfEN7S
kavvkd+9uH0meVR+AJvh67gSAS5pK/ElhedIsL3UIB648++meCxfgGixCYYGytCW
PK71e5K+uEvU0ED64Dh8O7liL+xjYZGpb6jmTFvJ2CCFfUECQQD4ljN2A0BO+bSc
YnncP6m1vQSllI7fP6DnJSLUY+xH2zn68YLE57rjNhC7r9zCGzNZJyUW1CiI1UXE
uju5vShhAkEA3GWCGmro+kzrJH/dU4lsNUEjQvv32AHDTbEVNM61nfFfQwMBMTtP
e051zQeVmN9QUgWn+qvWTY7VY03Kw4x17wJBALbLvIvLWD664FUfFP0g02sQ05nu
5CDGaUuPw0zrLZSpYLlnXwHsZUEvQJ7Dc1JJLjkgz+U5nZUBP4yqZcDvmAECQGBf
HpnQn9k7IyMNqkjp8WAEAJg8t25DrxPc2AoETVQoBGC4AqB1b9baQxaJN3fmRifn
g0FQPGAjkdlfXcdONw8CQQC/sMZ+6H8vwTtlAGMt9W0Tp4x9Yh+xHuMQyyyjtyGQ
m3b8zgCdklEHt1VCYQ/P+Av9GHkBxrp7jnSgOoL3BRTk
-----END RSA PRIVATE KEY-----`
};
