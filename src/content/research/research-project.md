---
title: "Mitigating Side-Channel Vulnerabilities in IoT Cryptography"
stack: ["Python", "OpenSSL", "AES", "RSA"]
summary: "Designed and ran timing-attack experiments against AES and RSA implementations to quantify IoT-relevant side-channel leakage, then validated constant-time countermeasures across 300 samples per test."
order: 1
github: "https://github.com/r-soroka/CSC320-SideChannel"
# demo: "https://..."
# demoLabel: "LIVE"
poster: "./Side-Channel.png"
posterAlt: "Research poster: Mitigating Side-Channel Vulnerabilities in IoT Cryptography, covering the problem, methodology, and timing results for AES and RSA"
---

A team project with Daniel Cirincione, Trevor Desiderio and Murat Yildiz,
presented as a research poster at the University of Tampa.

## The problem

AES, RSA and ECC are widely used to secure IoT devices. The algorithms
themselves are sound, but their *implementations* can leak secrets through
timing, power use and memory/cache behavior. These side channels let an
attacker recover secret keys without breaking the math. IoT devices are
especially exposed: limited hardware often means security is traded away
for efficiency.

## Method

- **Environment:** Python 3.13.5 on macOS (M1 MacBook Air), 300 samples per
  test after 20 warm-up iterations, using the median timing to reduce noise.
- **AES:** compared cache-cold and cache-warm plaintexts. The vulnerable
  version used an S-box with secret-dependent branching; the mitigated
  version used hardware AES through OpenSSL, which runs in constant time.
- **RSA:** compared heavy and light keys. The vulnerable version used
  square-and-multiply (which branches on key bits); the mitigated version
  used constant-time modular exponentiation (`pow`).
- **ECC:** not tested, since it requires physical power-analysis hardware.

## Results

| Algorithm | Vulnerable | Mitigated | Timing leakage reduced |
| --- | --- | --- | --- |
| AES | 208 ns | 0 ns | **100%** |
| RSA | 3,750 ns | 2,626 ns | **~30%** |

## Takeaways

- Side-channel vulnerabilities come from the implementation, not the
  algorithm.
- Constant-time techniques significantly reduce leakage: fully for AES,
  partially for RSA.
- The constraints of IoT hardware increase exposure to these attacks.
