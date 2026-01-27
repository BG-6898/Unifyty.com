import React, { useState } from 'react';
import { Badge } from './ui/badge';

const IntegrationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const integrations = [
    // Vulnerability Management (VM) - 4 tools
    { 
      name: 'Tenable', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Gold standard for vulnerability assessment with comprehensive asset coverage including cloud, OT, identity, and web app vulnerabilities'
    },
    { 
      name: 'Qualys', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idw382nG0m/w/400/h/400/theme/dark/icon.jpeg?t=1734545649666',
      description: 'Cloud-based vulnerability management with continuous monitoring and compliance scanning across IT and OT assets'
    },
    { 
      name: 'Rapid7', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'InsightVM platform for vulnerability risk management with live monitoring and automated threat prioritization'
    },
    { 
      name: 'Nessus Pro', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Industry-leading vulnerability scanner for identifying security flaws, misconfigurations, and compliance issues'
    },
    
    // SIEM Tools - 6 tools
    { 
      name: 'Splunk', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695',
      description: 'Enterprise Security platform with ML-based anomaly detection, UBA, and real-time analysis for massive data ingestion'
    },
    { 
      name: 'Microsoft Sentinel', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Cloud-native SIEM with AI-driven Fusion engine, UEBA, and Security Copilot for intelligent threat correlation'
    },
    { 
      name: 'IBM QRadar', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691',
      description: 'Modular SIEM with 700+ integrations, mature correlation rules, and AI-powered threat prioritization'
    },
    { 
      name: 'Elastic Security', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'Open-source SIEM on Elastic Stack with powerful search, full-stack visibility, and scalable log management'
    },
    { 
      name: 'LogRhythm', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idqj3Z_ELo/w/400/h/400/theme/dark/icon.jpeg?t=1734540865142',
      description: 'NextGen SIEM with machine analytics, automated response workflows, and advanced threat detection'
    },
    { 
      name: 'ArcSight', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691',
      description: 'Enterprise SIEM by Micro Focus with correlation engine, compliance management, and threat intelligence'
    },
    
    // EDR Tools - 4 tools
    { 
      name: 'CrowdStrike Falcon', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044',
      description: 'Cloud-native EDR with next-gen antivirus, threat intelligence, and 70%+ fileless malware detection'
    },
    { 
      name: 'SentinelOne', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idSUrLOkNR/w/400/h/400/theme/dark/icon.jpeg?t=1733863332651',
      description: 'AI-driven EDR with autonomous response, behavioral detection, and comprehensive cross-platform coverage'
    },
    { 
      name: 'Carbon Black', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'VMware endpoint security with incident response, threat hunting, and comprehensive endpoint recording'
    },
    { 
      name: 'Microsoft Defender', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Unified endpoint protection with Microsoft ecosystem integration, proactive hunting, and centralized management'
    },
    
    // Cloud Security - 5 tools
    { 
      name: 'AWS Security Hub', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862',
      description: 'Centralized security posture management for AWS with automated compliance checks and threat findings'
    },
    { 
      name: 'Azure Defender', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Cloud workload protection with integrated threat detection across Azure, AWS, and GCP environments'
    },
    { 
      name: 'Google Cloud SCC', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054',
      description: 'Security Command Center for vulnerability scanning, asset discovery, and compliance monitoring'
    },
    { 
      name: 'Prisma Cloud', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'Palo Alto multi-cloud security platform with CSPM, CWP, and runtime protection'
    },
    { 
      name: 'Wiz', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/id20mQeHt_/w/400/h/400/theme/dark/icon.jpeg?t=1734540969259',
      description: 'Multi-cloud security for identifying critical risks across cloud infrastructure and workloads'
    },
    
    // IAM Tools - 4 tools
    { 
      name: 'Okta', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idGbSoHq5i/w/400/h/400/theme/dark/icon.jpeg?t=1734540861871',
      description: 'Cloud-native IAM with SSO, adaptive MFA, and 7,000+ app integrations for identity management'
    },
    { 
      name: 'Azure AD / Entra ID', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Microsoft identity platform with SSO, conditional access, and seamless Microsoft 365 integration'
    },
    { 
      name: 'SailPoint', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/id8OYw4O4u/w/400/h/400/theme/dark/icon.jpeg?t=1733863325738',
      description: 'Enterprise identity governance with automated provisioning, access certifications, and compliance'
    },
    { 
      name: 'OneLogin', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idcF7Yzt6Y/w/400/h/400/theme/dark/icon.jpeg?t=1734540866043',
      description: 'Unified access management with SSO, MFA, and directory integration for hybrid environments'
    },
    
    // PAM Tools - 3 tools
    { 
      name: 'CyberArk', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id-1v8w9Xr/w/400/h/400/theme/dark/icon.jpeg?t=1734540854916',
      description: 'Digital Vault for privileged credential management with just-in-time access and session isolation'
    },
    { 
      name: 'BeyondTrust', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id8_skqk1C/w/400/h/400/theme/dark/icon.jpeg?t=1734540849584',
      description: 'Endpoint privilege management with session monitoring, remote support, and compliance reporting'
    },
    { 
      name: 'Delinea Secret Server', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/idHXc4FZuK/w/400/h/400/theme/dark/icon.jpeg?t=1734540856460',
      description: 'Cloud-ready PAM with passwordless authentication, secrets management, and Zero Trust security'
    },
    
    // Network Security - 4 tools
    { 
      name: 'Palo Alto Networks', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'ML-powered next-gen firewalls with Wildfire malware analysis and zero-day threat prevention'
    },
    { 
      name: 'Fortinet', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idGI7Ws-l6/w/400/h/400/theme/dark/icon.jpeg?t=1733863316555',
      description: 'FortiGate firewalls with unified threat management, SD-WAN, and AI-based threat detection'
    },
    { 
      name: 'Cisco', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idw5bwKjAT/w/400/h/400/theme/dark/icon.jpeg?t=1734540852836',
      description: 'Secure Firewall with Talos threat intelligence, ISE integration, and cloud-native security'
    },
    { 
      name: 'Check Point', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idwfLGw8ad/w/400/h/400/theme/dark/icon.jpeg?t=1734540951765',
      description: 'Next-gen firewall with threat prevention, VPN, and unified security management'
    },
    
    // ITSM / Ticketing - 3 tools
    { 
      name: 'ServiceNow', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149',
      description: 'Enterprise service management with incident response, workflow automation, and CMDB integration'
    },
    { 
      name: 'Jira', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idDdFwjvUe/w/400/h/400/theme/dark/icon.jpeg?t=1734540859768',
      description: 'Agile project tracking with customizable workflows, issue management, and DevSecOps integration'
    },
    { 
      name: 'Freshservice', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idCy_n_F3g/w/400/h/400/theme/dark/icon.jpeg?t=1734540857722',
      description: 'Cloud-native ITSM with AI-powered automation, asset management, and self-service portal'
    },

    // Threat Intelligence - 6 tools
    { 
      name: 'Recorded Future', 
      category: 'ThreatIntel', 
      logo: 'https://cdn.brandfetch.io/idh6kzDfCO/w/400/h/400/theme/dark/icon.jpeg?t=1734540867828',
      description: 'Real-time threat intelligence with risk scoring, vulnerability prioritization, and dark web monitoring'
    },
    { 
      name: 'ThreatConnect', 
      category: 'ThreatIntel', 
      logo: 'https://img.icons8.com/fluency/48/cyber-security.png',
      description: 'Threat intelligence platform for orchestrating and operationalizing threat data across security tools'
    },
    { 
      name: 'AlienVault OTX', 
      category: 'ThreatIntel', 
      logo: 'https://cdn.brandfetch.io/idw5bwKjAT/w/400/h/400/theme/dark/icon.jpeg?t=1734540852836',
      description: 'Open threat exchange with community-powered threat intelligence and IOC sharing'
    },
    { 
      name: 'Anomali', 
      category: 'ThreatIntel', 
      logo: 'https://img.icons8.com/color/48/artificial-intelligence.png',
      description: 'Threat intelligence platform with machine learning for automated threat detection and response'
    },
    { 
      name: 'MISP', 
      category: 'ThreatIntel', 
      logo: 'https://img.icons8.com/fluency/48/data-matrix-code.png',
      description: 'Open-source threat intelligence platform for sharing, storing, and correlating IOCs'
    },
    { 
      name: 'VirusTotal', 
      category: 'ThreatIntel', 
      logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054',
      description: 'File and URL analysis service with 70+ antivirus scanners and threat intelligence feeds'
    },

    // Application Security (AppSec) - 5 tools
    { 
      name: 'Checkmarx', 
      category: 'AppSec', 
      logo: 'https://cdn.brandfetch.io/id4pDlcv-8/w/400/h/400/theme/dark/icon.jpeg?t=1734540950925',
      description: 'Static application security testing (SAST) with comprehensive language support and IDE integration'
    },
    { 
      name: 'Snyk', 
      category: 'AppSec', 
      logo: 'https://cdn.brandfetch.io/id0mq2RrmV/w/400/h/400/theme/dark/icon.jpeg?t=1733863329851',
      description: 'Developer-first security for finding and fixing vulnerabilities in code, dependencies, and containers'
    },
    { 
      name: 'SonarQube', 
      category: 'AppSec', 
      logo: 'https://cdn.brandfetch.io/idTW-AZ-Xs/w/400/h/400/theme/dark/icon.jpeg?t=1734540868529',
      description: 'Continuous code quality and security inspection with 27+ programming languages support'
    },
    { 
      name: 'Veracode', 
      category: 'AppSec', 
      logo: 'https://cdn.brandfetch.io/idCZcrcH9w/w/400/h/400/theme/dark/icon.jpeg?t=1734540869304',
      description: 'Application security testing platform with SAST, DAST, SCA, and manual penetration testing'
    },
    { 
      name: 'WhiteSource', 
      category: 'AppSec', 
      logo: 'https://img.icons8.com/color/48/source-code.png',
      description: 'Open source security and license compliance management with automated vulnerability detection'
    },

    // Data Security (DLP) - 3 tools
    { 
      name: 'Forcepoint DLP', 
      category: 'DLP', 
      logo: 'https://cdn.brandfetch.io/idtwanUjgE/w/400/h/400/theme/dark/icon.jpeg?t=1734540857165',
      description: 'Data loss prevention with behavioral analytics, content inspection, and policy enforcement'
    },
    { 
      name: 'Digital Guardian', 
      category: 'DLP', 
      logo: 'https://img.icons8.com/fluency/48/protect.png',
      description: 'Data protection platform with visibility, classification, and automated response capabilities'
    },
    { 
      name: 'Symantec DLP', 
      category: 'DLP', 
      logo: 'https://cdn.brandfetch.io/idl2CbgL0d/w/400/h/400/theme/dark/icon.jpeg?t=1734540868877',
      description: 'Enterprise DLP for discovering, monitoring, and protecting sensitive data across all channels'
    },

    // Email Security - 4 tools
    { 
      name: 'Proofpoint', 
      category: 'Email', 
      logo: 'https://cdn.brandfetch.io/id2CwPp-yM/w/400/h/400/theme/dark/icon.jpeg?t=1734540866779',
      description: 'Email security platform with threat protection, compliance, and business email compromise prevention'
    },
    { 
      name: 'Mimecast', 
      category: 'Email', 
      logo: 'https://cdn.brandfetch.io/idSOcxMt4M/w/400/h/400/theme/dark/icon.jpeg?t=1734540865742',
      description: 'Cloud email security with advanced threat protection, archiving, and continuity services'
    },
    { 
      name: 'Barracuda', 
      category: 'Email', 
      logo: 'https://cdn.brandfetch.io/idlbRq86b0/w/400/h/400/theme/dark/icon.jpeg?t=1734540848801',
      description: 'Email protection gateway with spam filtering, malware defense, and data leak prevention'
    },
    { 
      name: 'Microsoft Defender for Office 365', 
      category: 'Email', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Integrated email and collaboration security with safe attachments and anti-phishing protection'
    },

    // Container Security - 3 tools
    { 
      name: 'Aqua Security', 
      category: 'Container', 
      logo: 'https://cdn.brandfetch.io/idA5f6QqQP/w/400/h/400/theme/dark/icon.jpeg?t=1734540847850',
      description: 'Full lifecycle container security from build to runtime with image scanning and runtime protection'
    },
    { 
      name: 'Twistlock', 
      category: 'Container', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'Palo Alto container security platform with vulnerability management and compliance enforcement'
    },
    { 
      name: 'Sysdig Secure', 
      category: 'Container', 
      logo: 'https://cdn.brandfetch.io/idKI1vEv5U/w/400/h/400/theme/dark/icon.jpeg?t=1734540868961',
      description: 'Cloud-native security with container threat detection, forensics, and compliance automation'
    },

    // Web Application Firewall (WAF) - 3 tools
    { 
      name: 'Cloudflare WAF', 
      category: 'WAF', 
      logo: 'https://cdn.brandfetch.io/idD0xFCRhb/w/400/h/400/theme/dark/icon.jpeg?t=1733863310809',
      description: 'Cloud-based WAF with DDoS protection, bot management, and OWASP Top 10 coverage'
    },
    { 
      name: 'AWS WAF', 
      category: 'WAF', 
      logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862',
      description: 'Managed web application firewall for protecting against common web exploits and bots'
    },
    { 
      name: 'Imperva WAF', 
      category: 'WAF', 
      logo: 'https://cdn.brandfetch.io/idCZO1etvY/w/400/h/400/theme/dark/icon.jpeg?t=1734540859040',
      description: 'Enterprise WAF with API security, bot mitigation, and advanced threat intelligence'
    },

    // Security Orchestration (SOAR) - 3 tools
    { 
      name: 'Palo Alto Cortex XSOAR', 
      category: 'SOAR', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'Security orchestration platform with 400+ integrations and automated incident response'
    },
    { 
      name: 'Splunk SOAR', 
      category: 'SOAR', 
      logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695',
      description: 'Security automation and orchestration with customizable playbooks and case management'
    },
    { 
      name: 'IBM Resilient', 
      category: 'SOAR', 
      logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691',
      description: 'Incident response platform with orchestration, automation, and threat intelligence integration'
    },

    // Backup & Recovery - 3 tools
    { 
      name: 'Veeam', 
      category: 'Backup', 
      logo: 'https://cdn.brandfetch.io/idv-sLQs4R/w/400/h/400/theme/dark/icon.jpeg?t=1734540869368',
      description: 'Backup and disaster recovery for virtual, physical, and cloud workloads with ransomware protection'
    },
    { 
      name: 'Commvault', 
      category: 'Backup', 
      logo: 'https://cdn.brandfetch.io/id4q1MBcfz/w/400/h/400/theme/dark/icon.jpeg?t=1734540853553',
      description: 'Data protection platform with backup, recovery, archiving, and compliance management'
    },
    { 
      name: 'Rubrik', 
      category: 'Backup', 
      logo: 'https://cdn.brandfetch.io/iduuTk1Xzq/w/400/h/400/theme/dark/icon.jpeg?t=1734540867927',
      description: 'Cloud data management with instant recovery, archival, and ransomware resilience'
    },
  ];
    { 
      name: 'Tenable', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Gold standard for vulnerability assessment with comprehensive asset coverage including cloud, OT, identity, and web app vulnerabilities'
    },
    { 
      name: 'Qualys', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idw382nG0m/w/400/h/400/theme/dark/icon.jpeg?t=1734545649666',
      description: 'Cloud-based vulnerability management with continuous monitoring and compliance scanning across IT and OT assets'
    },
    { 
      name: 'Rapid7', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'InsightVM platform for vulnerability risk management with live monitoring and automated threat prioritization'
    },
    { 
      name: 'Nessus', 
      category: 'VM', 
      logo: 'https://cdn.brandfetch.io/idVfYOVSeE/w/400/h/400/theme/dark/icon.jpeg?t=1735742515673',
      description: 'Industry-leading vulnerability scanner for identifying security flaws, misconfigurations, and compliance issues'
    },
    
    // SIEM Tools (4 tools)
    { 
      name: 'Splunk', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idAnLJhrbv/w/400/h/400/theme/dark/icon.jpeg?t=1733863319695',
      description: 'Enterprise Security platform with ML-based anomaly detection, UBA, and real-time analysis for massive data ingestion'
    },
    { 
      name: 'Microsoft Sentinel', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Cloud-native SIEM with AI-driven Fusion engine, UEBA, and Security Copilot for intelligent threat correlation'
    },
    { 
      name: 'IBM QRadar', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/id4J58qxpY/w/400/h/400/theme/dark/icon.jpeg?t=1733863293691',
      description: 'Modular SIEM with 700+ integrations, mature correlation rules, and AI-powered threat prioritization'
    },
    { 
      name: 'Elastic Security', 
      category: 'SIEM', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'Open-source SIEM on Elastic Stack with powerful search, full-stack visibility, and scalable log management'
    },
    
    // EDR Tools (4 tools)
    { 
      name: 'CrowdStrike', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idAFvJPJDw/w/400/h/400/theme/dark/icon.jpeg?t=1733863310044',
      description: 'Falcon platform with next-gen antivirus, cloud-delivered threat intelligence, and 70%+ fileless malware detection'
    },
    { 
      name: 'SentinelOne', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idSUrLOkNR/w/400/h/400/theme/dark/icon.jpeg?t=1733863332651',
      description: 'AI-driven EDR with autonomous response, behavioral threat detection, and comprehensive cross-platform coverage'
    },
    { 
      name: 'Carbon Black', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idw_bfBkXT/w/400/h/400/theme/dark/icon.jpeg?t=1734540955859',
      description: 'VMware endpoint security with incident response, threat hunting, and comprehensive endpoint activity recording'
    },
    { 
      name: 'Microsoft Defender', 
      category: 'EDR', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Unified endpoint protection with Microsoft ecosystem integration, proactive threat hunting, and centralized management'
    },
    
    // Cloud Tools (4 tools)
    { 
      name: 'AWS Security Hub', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idarqHjMDF/w/400/h/400/theme/dark/icon.jpeg?t=1733863314862',
      description: 'Centralized cloud security posture management for AWS with automated compliance checks and threat findings'
    },
    { 
      name: 'Azure Defender', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Microsoft cloud workload protection with integrated threat detection across Azure, AWS, and GCP environments'
    },
    { 
      name: 'Google Cloud Security', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/idvfoh16-Y/w/400/h/400/theme/dark/icon.jpeg?t=1733863312054',
      description: 'GCP-native security with Security Command Center for vulnerability scanning and compliance monitoring'
    },
    { 
      name: 'Wiz', 
      category: 'Cloud', 
      logo: 'https://cdn.brandfetch.io/id20mQeHt_/w/400/h/400/theme/dark/icon.jpeg?t=1734540969259',
      description: 'Multi-cloud security platform for identifying critical risks across cloud infrastructure and workloads'
    },
    
    // IAM Tools (4 tools)
    { 
      name: 'Okta', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idGbSoHq5i/w/400/h/400/theme/dark/icon.jpeg?t=1734540861871',
      description: 'Cloud-native IAM with SSO, adaptive MFA, and 7,000+ app integrations for workforce and customer identity'
    },
    { 
      name: 'Azure AD / Entra ID', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idIq_kF0rb/w/400/h/400/theme/dark/icon.jpeg?t=1735742510989',
      description: 'Microsoft identity platform with SSO, conditional access, and seamless Microsoft 365 ecosystem integration'
    },
    { 
      name: 'SailPoint', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/id8OYw4O4u/w/400/h/400/theme/dark/icon.jpeg?t=1733863325738',
      description: 'Enterprise identity governance with automated provisioning, access certifications, and compliance controls'
    },
    { 
      name: 'OneLogin', 
      category: 'IAM', 
      logo: 'https://cdn.brandfetch.io/idcF7Yzt6Y/w/400/h/400/theme/dark/icon.jpeg?t=1734540866043',
      description: 'Unified access management platform with SSO, MFA, and directory integration for hybrid environments'
    },
    
    // PAM Tools (3 tools)
    { 
      name: 'CyberArk', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id-1v8w9Xr/w/400/h/400/theme/dark/icon.jpeg?t=1734540854916',
      description: 'Digital Vault for privileged credential management with just-in-time access and session isolation'
    },
    { 
      name: 'BeyondTrust', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/id8_skqk1C/w/400/h/400/theme/dark/icon.jpeg?t=1734540849584',
      description: 'Endpoint privilege management with session monitoring, remote support, and compliance reporting'
    },
    { 
      name: 'Delinea', 
      category: 'PAM', 
      logo: 'https://cdn.brandfetch.io/idHXc4FZuK/w/400/h/400/theme/dark/icon.jpeg?t=1734540856460',
      description: 'Cloud-ready PAM with passwordless authentication, secrets management, and Zero Trust security'
    },
    
    // Network Tools (4 tools)
    { 
      name: 'Palo Alto', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idKq0n3RLf/w/400/h/400/theme/dark/icon.jpeg?t=1733863321506',
      description: 'ML-powered next-gen firewalls with Wildfire malware analysis and zero-day threat prevention'
    },
    { 
      name: 'Fortinet', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idGI7Ws-l6/w/400/h/400/theme/dark/icon.jpeg?t=1733863316555',
      description: 'FortiGate firewalls with unified threat management, SD-WAN, and AI-based threat detection'
    },
    { 
      name: 'Cisco', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idw5bwKjAT/w/400/h/400/theme/dark/icon.jpeg?t=1734540852836',
      description: 'Secure Firewall with Talos threat intelligence, ISE integration, and cloud-native security'
    },
    { 
      name: 'Check Point', 
      category: 'Network', 
      logo: 'https://cdn.brandfetch.io/idwfLGw8ad/w/400/h/400/theme/dark/icon.jpeg?t=1734540951765',
      description: 'Next-gen firewall with threat prevention, VPN, and unified security management across networks'
    },
    
    // ITSM Tools (3 tools)
    { 
      name: 'ServiceNow', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idH4mjRJHp/w/400/h/400/theme/dark/icon.jpeg?t=1733863328149',
      description: 'Enterprise service management platform with incident response, workflow automation, and CMDB integration'
    },
    { 
      name: 'Jira', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idDdFwjvUe/w/400/h/400/theme/dark/icon.jpeg?t=1734540859768',
      description: 'Agile project tracking with customizable workflows, issue management, and DevSecOps integration'
    },
    { 
      name: 'Freshservice', 
      category: 'ITSM', 
      logo: 'https://cdn.brandfetch.io/idCy_n_F3g/w/400/h/400/theme/dark/icon.jpeg?t=1734540857722',
      description: 'Cloud-native ITSM with AI-powered automation, asset management, and self-service portal'
    },
  ];

  const categories = [
    { name: 'All', count: '30' },
    { name: 'VM', count: '4' },
    { name: 'SIEM', count: '4' },
    { name: 'EDR', count: '4' },
    { name: 'Cloud', count: '4' },
    { name: 'IAM', count: '4' },
    { name: 'PAM', count: '3' },
    { name: 'Network', count: '4' },
    { name: 'ITSM', count: '3' },
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
            104 Integrations.
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mt-2">
              One Interface.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Connect your entire security stack. We don't replace your tools—we make them work together.
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
              style={{ animationDelay: `${index * 0.05}s` }}
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
              Showing <span className="text-cyan-400 font-bold">{filteredIntegrations.length}</span> of <span className="text-cyan-400 font-bold">104</span> enterprise integrations across 15 security categories.
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