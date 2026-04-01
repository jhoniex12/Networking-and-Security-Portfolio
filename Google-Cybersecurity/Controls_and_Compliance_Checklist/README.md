# Report summary

Botium Toys currently has basic technical and physical controls like firewall, antivirus, and CCTV. However, it lacks critical security controls such as encryption, backups, and access control. This creates high risk (score 8/10) and makes the company non-compliant with PCI DSS and partially compliant with GDPR and SOC frameworks.

## Controls Assessment Checklis

| Control                            | Yes / No        | Reason                                      |
| ---------------------------------- | --------------- | ------------------------------------------- |
| Least Privilege                    | ❌ No           | All employees have access to sensitive data |
| Disaster recovery plans            | ❌ No           | No recovery plans mentioned                 |
| Password policies                  | ⚠️ Weak (No)    | Exists but not strong enough                |
| Separation of duties               | ❌ No           | Not implemented                             |
| Firewall                           | ✅ Yes          | Firewall is already in place                |
| IDS (Intrusion Detection System)   | ❌ No           | Not installed                               |
| Backups                            | ❌ No           | No backups of critical data                 |
| Antivirus software                 | ✅ Yes          | Installed and monitored                     |
| Manual monitoring (legacy systems) | ⚠️ Partial (No) | No clear schedule                           |
| Encryption                         | ❌ No           | Not used for credit card data               |
| Password management system         | ❌ No           | No centralized system                       |
| Locks (physical security)          | ✅ Yes          | Office/store has locks                      |
| CCTV surveillance                  | ✅ Yes          | CCTV is present                             |
| Fire detection/prevention          | ✅ Yes          | Fire systems working                        |

## Compliance Checklist

| Best Practice                         | Yes / No | Reason                   |
| ------------------------------------- | -------- | ------------------------ |
| Authorized access to credit card data | ❌ No    | Everyone can access data |
| Secure environment for card data      | ❌ No    | No encryption            |
| Encryption implemented                | ❌ No    | Not used                 |
| Strong password management            | ❌ No    | Weak policy + no system  |

## GDPR

| Best Practice                   | Yes / No        | Reason                          |
| ------------------------------- | --------------- | ------------------------------- |
| EU data is secured              | ⚠️ Partial (No) | No encryption = weak protection |
| Breach notification (72 hrs)    | ✅ Yes          | Plan exists                     |
| Data classification & inventory | ❌ No           | Poor asset management           |
| Privacy policies enforced       | ✅ Yes          | Policies exist                  |

## SOC 1 / SOC 2

| Best Practice        | Yes / No | Reason             |
| -------------------- | -------- | ------------------ |
| User access policies | ❌ No    | No least privilege |
| Data confidentiality | ❌ No    | No encryption      |
| Data integrity       | ✅ Yes   | Controls exist     |
| Data availability    | ✅ Yes   | Systems maintained |

## Recommendations:

- Implement least privilege and separation of duties
- Add encryption for credit card and customer data
- Deploy an Intrusion Detection System (IDS)
- Create disaster recovery plan and backups
- Improve password policy + use password manager
- Schedule regular monitoring for legacy systems
- Improve asset inventory and classification
