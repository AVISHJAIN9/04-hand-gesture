# Security & Privacy Audit

## Threat Analysis & Privacy Guarantees
- **Webcam Spying & Biometric Data Leakage**: Mitigated completely by architecture—zero video data is ever sent across the wire.
- **Cross-Site Scripting (XSS)**: Handled via strict Content Security Policies (CSP) permitting script execution strictly from self and trusted Google MediaPipe CDN hosts.
- **Permissions Abuse**: Camera streams are requested with explicit user consent and automatically terminated via `track.stop()` when unmounting.
