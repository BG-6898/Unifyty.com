import React, { useState } from 'react';
import { Badge } from './ui/badge';

const IntegrationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const integrations = [
    // Vulnerability Management (VM) - 12 tools
    { name: 'Qualys VMDR', category: 'VM', logo: 'https://cdn.brandfetch.io/idw382nG0m/w/400/h/400/theme/dark/icon.jpeg?t=1734545649666', description: 'Continuous vulnerability assessment with prioritization and patch management' },
    { name: 'Tenable.io', category: 'VM', logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673', description: 'Cloud-based vulnerability management with comprehensive asset coverage' },
    { name: 'Tenable.sc', category: 'VM', logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673', description: 'On-premises security and compliance management platform' },
    { name: 'Rapid7 InsightVM', category: 'VM', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Live vulnerability management with automated threat prioritization' },
    { name: 'Nexpose', category: 'VM', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Real-time vulnerability scanning with adaptive security' },
    { name: 'OpenVAS', category: 'VM', logo: 'https://img.icons8.com/color/48/security-checked.png', description: 'Open-source vulnerability scanning and management framework' },
    { name: 'Nessus', category: 'VM', logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673', description: 'Industry-standard vulnerability scanner for security assessment' },
    { name: 'MS Defender VM', category: 'VM', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Microsoft vulnerability management integrated with Defender' },
    { name: 'CrowdStrike Spotlight', category: 'VM', logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044', description: 'Real-time vulnerability assessment within Falcon platform' },
    { name: 'IBM QRadar VM', category: 'VM', logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691', description: 'Vulnerability manager integrated with QRadar SIEM' },
    { name: 'Kenna Security', category: 'VM', logo: 'https://img.icons8.com/color/48/security-shield-green.png', description: 'Risk-based vulnerability management with data-driven prioritization' },
    { name: 'Ivanti Neurons', category: 'VM', logo: 'https://img.icons8.com/color/48/neural-network.png', description: 'AI-powered vulnerability and patch management platform' },

    // SOC / SIEM / Security Analytics - 7 tools
    { name: 'Splunk Enterprise Security', category: 'SIEM', logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695', description: 'Enterprise SIEM with ML-based analytics and threat intelligence' },
    { name: 'IBM QRadar', category: 'SIEM', logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691', description: 'Modular SIEM with AI-powered security intelligence' },
    { name: 'Microsoft Sentinel', category: 'SIEM', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Cloud-native SIEM with intelligent security analytics' },
    { name: 'ArcSight ESM', category: 'SIEM', logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691', description: 'Enterprise security manager for real-time threat detection' },
    { name: 'LogRhythm', category: 'SIEM', logo: 'https://cdn.brandfetch.io/idqj3Z_ELo/w/400/h/400/theme/dark/icon.jpeg?t=1734540865142', description: 'NextGen SIEM with machine analytics and SOAR capabilities' },
    { name: 'Elastic SIEM', category: 'SIEM', logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859', description: 'Open-source SIEM built on Elastic Stack' },
    { name: 'Sumo Logic', category: 'SIEM', logo: 'https://cdn.brandfetch.io/idvC8pxKPU/w/400/h/400/theme/dark/icon.jpeg?t=1734540868745', description: 'Cloud-native security analytics and log management' },

    // SOAR - 5 tools
    { name: 'Cortex XSOAR', category: 'SOAR', logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506', description: 'Security orchestration with 400+ integrations and automation' },
    { name: 'Splunk SOAR', category: 'SOAR', logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695', description: 'Security automation with customizable playbooks' },
    { name: 'IBM Resilient', category: 'SOAR', logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691', description: 'Incident response platform with orchestration capabilities' },
    { name: 'Swimlane', category: 'SOAR', logo: 'https://img.icons8.com/fluency/48/workflow.png', description: 'Low-code security automation and orchestration platform' },
    { name: 'Tines', category: 'SOAR', logo: 'https://img.icons8.com/color/48/automation.png', description: 'No-code automation platform for security workflows' },

    // EDR / XDR - 6 tools
    { name: 'CrowdStrike Falcon', category: 'EDR', logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044', description: 'Cloud-native EDR with AI-powered threat detection' },
    { name: 'MS Defender for Endpoint', category: 'EDR', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Enterprise endpoint protection with behavioral detection' },
    { name: 'SentinelOne', category: 'EDR', logo: 'https://cdn.brandfetch.io/idSUrLOkNR/w/400/h/400/theme/dark/icon.jpeg?t=1733863332651', description: 'Autonomous EDR with AI-driven threat prevention' },
    { name: 'Cortex XDR', category: 'EDR', logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506', description: 'Extended detection and response across endpoints, network, cloud' },
    { name: 'Trend Vision One', category: 'EDR', logo: 'https://cdn.brandfetch.io/idaW9FHrBI/w/400/h/400/theme/dark/icon.jpeg?t=1734540868991', description: 'Unified XDR platform with attack surface visibility' },
    { name: 'Sophos Intercept X', category: 'EDR', logo: 'https://cdn.brandfetch.io/idJ5Itwgkj/w/400/h/400/theme/dark/icon.jpeg?t=1734540868517', description: 'Next-gen endpoint protection with deep learning' },

    // Cloud Security (CSPM / CNAPP) - 8 tools
    { name: 'Prisma Cloud', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506', description: 'Comprehensive cloud native security platform (CNAPP)' },
    { name: 'Wiz', category: 'Cloud', logo: 'https://cdn.brandfetch.io/id20mQeHt_/w/400/h/400/theme/dark/icon.jpeg?t=1734540969259', description: 'Cloud security platform for multi-cloud environments' },
    { name: 'Orca Security', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idB7e2rPPT/w/400/h/400/theme/dark/icon.jpeg?t=1734540866272', description: 'Agentless cloud security with SideScanning technology' },
    { name: 'Lacework', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idKPYYz8iP/w/400/h/400/theme/dark/icon.jpeg?t=1734540863726', description: 'Cloud security platform with behavioral analysis' },
    { name: 'Azure Defender', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Cloud workload protection for Azure environments' },
    { name: 'AWS Security Hub', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862', description: 'Centralized security and compliance view for AWS' },
    { name: 'AWS GuardDuty', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862', description: 'Intelligent threat detection for AWS workloads' },
    { name: 'GCP Security Command Center', category: 'Cloud', logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054', description: 'Unified security management for Google Cloud' },

    // Identity & Access Management (IAM) - 6 tools
    { name: 'Okta', category: 'IAM', logo: 'https://cdn.brandfetch.io/idGbSoHq5i/w/400/h/400/theme/dark/icon.jpeg?t=1734540861871', description: 'Cloud-native identity and access management platform' },
    { name: 'Azure AD / Entra ID', category: 'IAM', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Microsoft identity platform with SSO and MFA' },
    { name: 'Ping Identity', category: 'IAM', logo: 'https://cdn.brandfetch.io/idHxILIzXO/w/400/h/400/theme/dark/icon.jpeg?t=1734540866574', description: 'Identity security platform for workforce and customers' },
    { name: 'SailPoint', category: 'IAM', logo: 'https://cdn.brandfetch.io/id8OYw4O4u/w/400/h/400/theme/dark/icon.jpeg?t=1733863325738', description: 'Enterprise identity governance and administration' },
    { name: 'ForgeRock', category: 'IAM', logo: 'https://cdn.brandfetch.io/idR7X_9vwq/w/400/h/400/theme/dark/icon.jpeg?t=1734540857356', description: 'Digital identity platform for consumer and workforce' },
    { name: 'OneLogin', category: 'IAM', logo: 'https://cdn.brandfetch.io/idcF7Yzt6Y/w/400/h/400/theme/dark/icon.jpeg?t=1734540866043', description: 'Unified access management with SSO and MFA' },

    // Privileged Access Management (PAM) - 5 tools
    { name: 'CyberArk', category: 'PAM', logo: 'https://cdn.brandfetch.io/id-1v8w9Xr/w/400/h/400/theme/dark/icon.jpeg?t=1734540854916', description: 'Privileged access security with digital vault' },
    { name: 'BeyondTrust', category: 'PAM', logo: 'https://cdn.brandfetch.io/id8_skqk1C/w/400/h/400/theme/dark/icon.jpeg?t=1734540849584', description: 'Intelligent privilege management and remote access' },
    { name: 'HashiCorp Vault', category: 'PAM', logo: 'https://cdn.brandfetch.io/idfq1z5bMz/w/400/h/400/theme/dark/icon.jpeg?t=1733863317996', description: 'Secrets management and data encryption platform' },
    { name: 'Delinea Secret Server', category: 'PAM', logo: 'https://cdn.brandfetch.io/idHXc4FZuK/w/400/h/400/theme/dark/icon.jpeg?t=1734540856460', description: 'Privileged password and session management' },
    { name: 'AWS Secrets Manager', category: 'PAM', logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862', description: 'Managed service for secrets rotation and retrieval' },

    // Network Security - 8 tools
    { name: 'Palo Alto Networks', category: 'Network', logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506', description: 'Next-gen firewalls with threat prevention' },
    { name: 'Fortinet', category: 'Network', logo: 'https://cdn.brandfetch.io/idGI7Ws-l6/w/400/h/400/theme/dark/icon.jpeg?t=1733863316555', description: 'FortiGate firewalls with unified threat management' },
    { name: 'Check Point', category: 'Network', logo: 'https://cdn.brandfetch.io/idwfLGw8ad/w/400/h/400/theme/dark/icon.jpeg?t=1734540951765', description: 'Network security with threat prevention and VPN' },
    { name: 'Cisco Security', category: 'Network', logo: 'https://cdn.brandfetch.io/idw5bwKjAT/w/400/h/400/theme/dark/icon.jpeg?t=1734540852836', description: 'Secure firewall with Talos threat intelligence' },
    { name: 'F5', category: 'Network', logo: 'https://cdn.brandfetch.io/idmN6sr6h7/w/400/h/400/theme/dark/icon.jpeg?t=1734540856764', description: 'Application security and delivery solutions' },
    { name: 'Zscaler', category: 'Network', logo: 'https://cdn.brandfetch.io/id_nwWfN7V/w/400/h/400/theme/dark/icon.jpeg?t=1734540869774', description: 'Cloud security platform with Zero Trust access' },
    { name: 'Netskope', category: 'Network', logo: 'https://cdn.brandfetch.io/idq4w2I2pI/w/400/h/400/theme/dark/icon.jpeg?t=1734540865955', description: 'Cloud security with real-time data protection' },
    { name: 'Juniper Networks', category: 'Network', logo: 'https://cdn.brandfetch.io/id87dh1Ovf/w/400/h/400/theme/dark/icon.jpeg?t=1734540860552', description: 'AI-driven enterprise networking and security' },

    // Application Security (AppSec) - 6 tools
    { name: 'Checkmarx', category: 'AppSec', logo: 'https://cdn.brandfetch.io/id4pDlcv-8/w/400/h/400/theme/dark/icon.jpeg?t=1734540950925', description: 'Static application security testing (SAST)' },
    { name: 'Fortify', category: 'AppSec', logo: 'https://cdn.brandfetch.io/idGI7Ws-l6/w/400/h/400/theme/dark/icon.jpeg?t=1733863316555', description: 'Application security testing and protection' },
    { name: 'Veracode', category: 'AppSec', logo: 'https://cdn.brandfetch.io/idCZcrcH9w/w/400/h/400/theme/dark/icon.jpeg?t=1734540869304', description: 'Cloud-based application security platform' },
    { name: 'SonarQube', category: 'AppSec', logo: 'https://cdn.brandfetch.io/idTW-AZ-Xs/w/400/h/400/theme/dark/icon.jpeg?t=1734540868529', description: 'Continuous code quality and security inspection' },
    { name: 'Snyk', category: 'AppSec', logo: 'https://cdn.brandfetch.io/id0mq2RrmV/w/400/h/400/theme/dark/icon.jpeg?t=1733863329851', description: 'Developer-first security for code and dependencies' },
    { name: 'GitHub Advanced Security', category: 'AppSec', logo: 'https://cdn.brandfetch.io/idSUrLOkNR/w/400/h/400/theme/dark/icon.jpeg?t=1733863332651', description: 'Code scanning and secret detection in GitHub' },

    // GRC / Risk / Compliance - 7 tools
    { name: 'RSA Archer', category: 'GRC', logo: 'https://img.icons8.com/color/48/risk.png', description: 'Integrated risk management and compliance platform' },
    { name: 'ServiceNow GRC', category: 'GRC', logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149', description: 'Governance, risk, and compliance management' },
    { name: 'MetricStream', category: 'GRC', logo: 'https://img.icons8.com/fluency/48/administrative-tools.png', description: 'Connected GRC platform for risk and compliance' },
    { name: 'LogicGate', category: 'GRC', logo: 'https://img.icons8.com/color/48/logic-gate.png', description: 'Risk cloud platform with no-code flexibility' },
    { name: 'OneTrust', category: 'GRC', logo: 'https://cdn.brandfetch.io/idnYio0VDE/w/400/h/400/theme/dark/icon.jpeg?t=1734540866139', description: 'Privacy and data governance platform' },
    { name: 'Diligent', category: 'GRC', logo: 'https://img.icons8.com/fluency/48/verified-account.png', description: 'Board governance and risk management solutions' },
    { name: 'IBM OpenPages', category: 'GRC', logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691', description: 'AI-powered GRC platform for enterprise risk' },

    // NOC / Infrastructure Monitoring - 11 tools
    { name: 'SolarWinds', category: 'NOC', logo: 'https://cdn.brandfetch.io/idTJV-s0wX/w/400/h/400/theme/dark/icon.jpeg?t=1734540868481', description: 'Network performance monitoring and management' },
    { name: 'Nagios', category: 'NOC', logo: 'https://img.icons8.com/color/48/monitor.png', description: 'Open-source IT infrastructure monitoring' },
    { name: 'Zabbix', category: 'NOC', logo: 'https://img.icons8.com/color/48/server.png', description: 'Enterprise monitoring for networks and applications' },
    { name: 'PRTG', category: 'NOC', logo: 'https://img.icons8.com/color/48/dashboard.png', description: 'Network monitoring with auto-discovery' },
    { name: 'Datadog', category: 'NOC', logo: 'https://cdn.brandfetch.io/id7VSMjHDm/w/400/h/400/theme/dark/icon.jpeg?t=1733863311629', description: 'Cloud-scale monitoring and security platform' },
    { name: 'Dynatrace', category: 'NOC', logo: 'https://cdn.brandfetch.io/idIFdVTOK7/w/400/h/400/theme/dark/icon.jpeg?t=1733863314128', description: 'AI-powered application performance monitoring' },
    { name: 'Grafana', category: 'NOC', logo: 'https://cdn.brandfetch.io/idNpMiyU75/w/400/h/400/theme/dark/icon.jpeg?t=1733863317152', description: 'Open-source analytics and monitoring platform' },
    { name: 'Prometheus', category: 'NOC', logo: 'https://img.icons8.com/color/48/prometheus-app.png', description: 'Time-series database for monitoring and alerting' },
    { name: 'New Relic', category: 'NOC', logo: 'https://cdn.brandfetch.io/idyRfP5wUn/w/400/h/400/theme/dark/icon.jpeg?t=1733863320749', description: 'Full-stack observability platform' },
    { name: 'PagerDuty', category: 'NOC', logo: 'https://cdn.brandfetch.io/idPu9n_zlE/w/400/h/400/theme/dark/icon.jpeg?t=1734540866485', description: 'Incident management and response platform' },
    { name: 'ServiceNow ITSM', category: 'NOC', logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149', description: 'IT service management and operations' },

    // Email Security - 6 tools
    { name: 'Proofpoint', category: 'Email', logo: 'https://cdn.brandfetch.io/id2CwPp-yM/w/400/h/400/theme/dark/icon.jpeg?t=1734540866779', description: 'Email security and threat protection platform' },
    { name: 'Mimecast', category: 'Email', logo: 'https://cdn.brandfetch.io/idSOcxMt4M/w/400/h/400/theme/dark/icon.jpeg?t=1734540865742', description: 'Email security with archiving and continuity' },
    { name: 'MS Defender for Office 365', category: 'Email', logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989', description: 'Email and collaboration security protection' },
    { name: 'Barracuda', category: 'Email', logo: 'https://cdn.brandfetch.io/idlbRq86b0/w/400/h/400/theme/dark/icon.jpeg?t=1734540848801', description: 'Email protection gateway with spam filtering' },
    { name: 'Abnormal Security', category: 'Email', logo: 'https://img.icons8.com/fluency/48/artificial-intelligence.png', description: 'AI-native email security against advanced attacks' },
    { name: 'Trend Micro Email Security', category: 'Email', logo: 'https://cdn.brandfetch.io/idaW9FHrBI/w/400/h/400/theme/dark/icon.jpeg?t=1734540868991', description: 'Advanced threat protection for email' },

    // Data Security / DLP - 6 tools
    { name: 'Symantec DLP', category: 'DLP', logo: 'https://cdn.brandfetch.io/idl2CbgL0d/w/400/h/400/theme/dark/icon.jpeg?t=1734540868877', description: 'Enterprise data loss prevention across all channels' },
    { name: 'Forcepoint DLP', category: 'DLP', logo: 'https://cdn.brandfetch.io/idtwanUjgE/w/400/h/400/theme/dark/icon.jpeg?t=1734540857165', description: 'Data protection with behavioral analytics' },
    { name: 'Digital Guardian', category: 'DLP', logo: 'https://img.icons8.com/fluency/48/protect.png', description: 'Data protection platform with visibility and classification' },
    { name: 'BigID', category: 'DLP', logo: 'https://cdn.brandfetch.io/idO1aRTWFF/w/400/h/400/theme/dark/icon.jpeg?t=1734540849287', description: 'Data discovery and privacy intelligence platform' },
    { name: 'Varonis', category: 'DLP', logo: 'https://cdn.brandfetch.io/idFxKNsFpe/w/400/h/400/theme/dark/icon.jpeg?t=1734540869184', description: 'Data security platform for unstructured data' },
    { name: 'Imperva', category: 'DLP', logo: 'https://cdn.brandfetch.io/idCZO1etvY/w/400/h/400/theme/dark/icon.jpeg?t=1734540859040', description: 'Data security and compliance protection' },

    // Threat Intelligence - 7 tools
    { name: 'Recorded Future', category: 'ThreatIntel', logo: 'https://cdn.brandfetch.io/idh6kzDfCO/w/400/h/400/theme/dark/icon.jpeg?t=1734540867828', description: 'Real-time threat intelligence with risk scoring' },
    { name: 'Mandiant', category: 'ThreatIntel', logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054', description: 'Threat intelligence and incident response services' },
    { name: 'Anomali', category: 'ThreatIntel', logo: 'https://img.icons8.com/color/48/artificial-intelligence.png', description: 'Threat intelligence platform with ML automation' },
    { name: 'ThreatConnect', category: 'ThreatIntel', logo: 'https://img.icons8.com/fluency/48/cyber-security.png', description: 'Threat intelligence platform for orchestration' },
    { name: 'CrowdStrike Intelligence', category: 'ThreatIntel', logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044', description: 'Adversary-focused threat intelligence' },
    { name: 'VirusTotal', category: 'ThreatIntel', logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054', description: 'File and URL analysis with 70+ scanners' },
    { name: 'MISP', category: 'ThreatIntel', logo: 'https://img.icons8.com/fluency/48/data-matrix-code.png', description: 'Open-source threat intelligence sharing platform' },

    // Penetration Testing / Red Team - 8 tools
    { name: 'Metasploit', category: 'PenTest', logo: 'https://img.icons8.com/color/48/hacking.png', description: 'Framework for penetration testing and exploit development' },
    { name: 'Cobalt Strike', category: 'PenTest', logo: 'https://img.icons8.com/color/48/strike.png', description: 'Threat emulation and adversary simulation platform' },
    { name: 'Nmap', category: 'PenTest', logo: 'https://img.icons8.com/color/48/network-card.png', description: 'Network scanning and host discovery tool' },
    { name: 'Burp Suite', category: 'PenTest', logo: 'https://img.icons8.com/fluency/48/web-design.png', description: 'Web application security testing toolkit' },
    { name: 'Nessus (Pentest)', category: 'PenTest', logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673', description: 'Vulnerability scanner for penetration testing' },
    { name: 'OWASP ZAP', category: 'PenTest', logo: 'https://img.icons8.com/color/48/web-shield.png', description: 'Open-source web application security scanner' },
    { name: 'Acunetix', category: 'PenTest', logo: 'https://img.icons8.com/fluency/48/radar.png', description: 'Web vulnerability scanner with crawling' },
    { name: 'Core Impact', category: 'PenTest', logo: 'https://img.icons8.com/color/48/explosion.png', description: 'Commercial penetration testing platform' },

    // Ticketing & Workflow - 2 tools
    { name: 'Jira', category: 'Ticketing', logo: 'https://cdn.brandfetch.io/idDdFwjvUe/w/400/h/400/theme/dark/icon.jpeg?t=1734540859768', description: 'Issue tracking and agile project management' },
    { name: 'ServiceNow', category: 'Ticketing', logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149', description: 'IT service management and workflow automation' },
  ];

  const categories = [
    { name: 'All', count: '110' },
    { name: 'VM', count: '12' },
    { name: 'SIEM', count: '7' },
    { name: 'SOAR', count: '5' },
    { name: 'EDR', count: '6' },
    { name: 'Cloud', count: '8' },
    { name: 'IAM', count: '6' },
    { name: 'PAM', count: '5' },
    { name: 'Network', count: '8' },
    { name: 'AppSec', count: '6' },
    { name: 'GRC', count: '7' },
    { name: 'NOC', count: '11' },
    { name: 'Email', count: '6' },
    { name: 'DLP', count: '6' },
    { name: 'ThreatIntel', count: '7' },
    { name: 'PenTest', count: '8' },
    { name: 'Ticketing', count: '2' },
  ];

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(int => int.category === selectedCategory);

  return (
    <section id="integrations" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            110 Tool Integrations.
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              One Interface.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Connect your entire security stack across 16 domains. We don't replace your tools—we make them work together.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Badge
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400'
              }`}
            >
              {category.name}
              <span className={`ml-2 ${selectedCategory === category.name ? 'text-white' : 'text-cyan-400'}`}>
                {category.count}
              </span>
            </Badge>
          ))}
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 min-h-[500px]">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index % 20) * 0.05}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                    <img 
                      src={integration.logo} 
                      alt={integration.name} 
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.src = 'https://img.icons8.com/fluency/48/security-checked.png';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {integration.name}
                    </p>
                    <p className="text-xs text-cyan-400 font-medium">
                      {integration.category}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <p className="text-lg text-slate-300">
              Showing <span className="text-cyan-400 font-bold">{filteredIntegrations.length}</span> of <span className="text-cyan-400 font-bold">110</span> enterprise integrations across 16 security domains.
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 underline underline-offset-4">
              View All Integrations →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;