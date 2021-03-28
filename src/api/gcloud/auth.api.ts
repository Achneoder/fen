import nock from 'nock';

export function mockEndoints(): void {
  // mock the auth api
  nock('https://www.googleapis.com', { encodedQueryParams: true })
    .persist()
    .post('/oauth2/v4/token', () => true)
    .reply(200, () => {
      return {};
    });

  // mock firebase auth request
  nock('https://www.googleapis.com', { encodedQueryParams: true })
    .persist()
    .get('/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com')
    .reply(200, {
      '4e00e8fe5f2c88cf0c7044f307f7e739788e4f1e':
        '-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIILnkHftPtFMYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjEw\nMzEzMDkyMDE2WhcNMjEwMzI5MjEzNTE2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAKhhzpJd8Eeu/lCdaA0x2P0gHvVT3aGmH4bxgbVpLjvQDZEr\nDebKhDaMNJDx16MDDJWo7oFzSCLe8humbCKqRymRISD7S2BsUnYBSgShrhkFZ00S\nFxan9znx8sev4sIWaxy0M7FEUVLpKlzcBIVpK5Wpj1P8z1A0lVhd5lj/gHY/WTLv\nNyG1tcajR0nSSygymGlYpfJKWuBjJTQSbhfTujXFaqUGKov6OeRU+7jBTow4M8Cu\nk8a1eohl/2ti5MHjPYtXvhahfDo33uHZ9TTle5NEFZCC2lW8wL4RBvCqhhw2i5EV\nfDuqSw9/G2MHCN5QmFTwNY+LNE2aghLY7kIvQW8CAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAAI6cD9Tx1QSwdUj1k+jkLBor9m6mZHv2cb40jsjiFxo\nYZESNCpLikD7K6pRewbFIrvqnUQDMxNVMlrFCWVm7NqJPJKvdnWEVOHqW5TgoMe3\nHnkzgpjEwREQfWJGJeW6yQbg0t8NW4h8Wi516aL3uNP8pgR7ZSLBwzbnW24SS1Kc\nfOMVLrKYaugvpDHy7TeK4WEilnGV3l2Agwq4cmqqdZscrRKxfrq9leLeNDpFlPLK\nlqrRlsuf5Zo0nOEsQ/+XW0vEsR+3VEGAgKJ4vRJoXsTh2DDp7StfwxXbQNBZ8MdR\nZ65pwGB7HGCXZiCrAo2ZyMGYr91SRgdlXzjRtOiYcX4=\n-----END CERTIFICATE-----\n',
      f84662121412487519bbf8ead8dfbb37860299d7:
        '-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIJmpM41F7BqYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjEw\nMzIxMDkyMDIwWhcNMjEwNDA2MjEzNTIwWjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBALJgbG+xhm76alURCh3EHLHQhjt8+NPW4+jeYJdkqKkCN1wp\nzYdc8KX+MszQizxtnBjuMp9iAQIapc2yCKoD1Td87ydIEA0qikwbsGQkl/0uBhfD\nqmB4YagHpY83hsNsAO26TUUMb3XMEwYGQpHdRBwvMlSr17IuEPiHjpmrc+vpAgAK\nlvqMMVX7iABr/iuYxCHNzdRWUksxDViD9QcCMfO7E4clE1JTtVfWNt3RkVN9Xijj\nnbHFPDmBNown8EX6G2Q2QuHv0zuZz1lNkj7BS2oR9p53e39ZP7JsL2EPXoVQSKwl\nLIhvrdHDXNXheV1jqdCs5R6K9msThSd3ouho468CAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBABtCCOEiiK71TgpebxIAJapNo6IjwOkxQLLSq2IzyYiu\n/b69SvK1WoERkmjtsbOoMrg4+yC/ocPBYwwQMYaZxfZbV+R0ClD0dy5GBx33h8xm\nH6+oS4OgVYiL7sxdPTfzVXAE87Y7ty414BPmhKI554/A3RnzKOPykZByMMKMvYCP\nZbLsTW75wZKieT/XO/OytBpJV1hPVwVMG4Cwyj3P6Nydh5IoxWl/bWvgBqS5pucL\nb1Sfi7fsv4B736azbBqfxOZH2ArC53m1hpZj7YZVMssAKiT6AoZdP0dN3vyEzp63\nYkDF+0RpMJma96LnlWiOGJS23mdSzy5BqUPmyB/y/nw=\n-----END CERTIFICATE-----\n'
    });
}
