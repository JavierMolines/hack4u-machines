// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import parse from "node-html-parser"

const vulnHub = [
  {
    platform: "VulnHub",
    name: "DarkHole2",
    os: "Linux",
    state: "Fácil",
    techniques:
      "Information Leakage\nGithub Project Enumeration\nSQLI (SQL Injection)\nChisel (Remote Port Forwarding) + Abusing Internal Web Server\nBash History - Information Leakage [User Pivoting]\nAbusing Sudoers Privilege [Privilege Escalation]",
    certification: "eWPT\neJPT",
    ip: "https://www.vulnhub.com/entry/darkhole-2,740/",
    video: "https://www.youtube.com/watch?v=xYLNxmuH9Sg",
  },
  {
    platform: "VulnHub",
    name: "IMF",
    os: "Linux",
    state: "Media",
    techniques:
      "Information Leakage\nAbusing Web Page - User Enumeration Vulnerability (Login)\nSQLI (SQL Injection) [Boolean Based Blind] + Python Scripting [Manual]\nAbusing Image Upload Form [RCE] + WAF Bypass\nCustom Binary Exploitation - Ghidra Anlysis\nCustom Binary Exploitation - Buffer Overflow x32 bits (ret2reg technique) [Privilege Escalation]",
    certification: "eWPT\neWPTXv2\nOSWE\nBuffer Overflow",
    ip: "https://www.vulnhub.com/entry/imf-1,162/",
    video: "https://www.youtube.com/watch?v=kpdDTkRzYbw",
  },
  {
    platform: "VulnHub",
    name: "Symfonos 1",
    os: "Linux",
    state: "Fácil",
    techniques:
      "Note: On this machine we have configured an internal network to Pivot to Symfonos2\nSMB Enumeration\nInformation Leakage\nWordPress Enumeration\nAbusing WordPress Plugin - Mail Masta 1.0\nLocal File Inclusion (LFI)\nBash Scripting - Creating our own file reader utility\nLFI + Abusing SMTP service to achieve RCE\nAbusing SUID privilege + PATH Hijacking [Privilege Escalation]\nEXTRA: Pivoting Lab with Symfonos 2",
    certification: "eWPT\neJPT\neCPPTv2\neCPTXv2",
    ip: "https://www.vulnhub.com/entry/symfonos-1,322/",
    video: "https://www.youtube.com/watch?v=L1jSoCcvRY4",
  },
  {
    platform: "VulnHub",
    name: "Symfonos 2",
    os: "Linux",
    state: "Media",
    techniques:
      "EXTRA: Creation of bash script to discover computers on the internal network\nEXTRA: Creation of a bash script to discover the open ports of the computers discovered in the internal network\nEXTRA: Remote Port Forwarding - Playing with Chisel (From Symfonos 1)\nEXTRA: Socks5 connection with Chisel (Pivoting) (From Symfonos 1)\nEXTRA: FoxyProxy + Socks5 Tunnel\nEXTRA: Port enumeration with nmap through proxychains\nSMB Enumeration\nFTP Exploitation - Abusing SITE CPFR/CPTO\nAbusing FTP &amp; SMB - Obtaining files from the machine\nSSH Connection via Proxychains\nSSH + Local Port Forwarding in order to access internal LibreNMS\nPlaying with socat to define connection flow\nLibreNMS Exploitation (User Pivoting) [RCE]\nAbusing sudoers privilege (mysql) [Privilege Escalation]",
    certification: "eWPT\neJPT\neCPPTv2\neCPTXv2",
    ip: "https://www.vulnhub.com/entry/symfonos-2,331/",
    video: "https://www.youtube.com/watch?v=L1jSoCcvRY4",
  },
  {
    platform: "VulnHub",
    name: "Symfonos 3",
    os: "Linux",
    state: "Media",
    techniques:
      "Note: On this machine we have configured 2 internal networks to Pivot to Symfonos 5 + Windows Machine\nWeb Enumeration\nShellshock Attack - User Agent [RCE]\nCreating an AutoPwn script - Python Scripting\nProcesses and commands enumeration - Pspy\nIntercepting FTP authentication credentials - Tcpdump\nAbusing write permissions in Python libraries + Abusing Cron Job [Privilege Escalation]\nEXTRA: Pivoting Lab with Hades-PC (Windows 10 Personal Computer in VMWare)\nEXTRA: Creation of bash script to discover computers on the internal network\nEXTRA: Creation of a bash script to discover the open ports of the computers discovered in the internal network\nEXTRA: Remote Port Forwarding - Playing with Chisel (From Symfonos 3)\nEXTRA: Socks5 connection with Chisel (Pivoting) (From Symfonos 3)\nEXTRA: Port enumeration with nmap through proxychains\nEXTRA: SMB &amp; WinRM Enumeration - CrackMapExec\nEXTRA: Password Spraying - CrackMapExec (Looking for valid credentials)\nEXTRA: Abusing WinRM through proxychains - EvilWinRM\nEXTRA: Pivoting Lab with Symfonos 5",
    certification: "eWPT\neJPT\neCPPTv2\neCPTXv2",
    ip: "https://www.vulnhub.com/entry/symfonos-31,332/",
    video: "https://www.youtube.com/watch?v=E4eUdAd6tAM",
  },
  {
    platform: "VulnHub",
    name: "Symfonos 5",
    os: "Linux",
    state: "Media",
    techniques:
      "EXTRA: Creating a double socks5 tunnel with chisel\nEXTRA: Redirecting request flow with socat  to make services accessible\nEXTRA: Powershell script to find computers in the internal network\nEXTRA: Playing with xargs to increase the speed of port scanning with the Dual Proxy\nWeb Enumeration\nLdap Injection - Login Bypass\nLocal File Inclusion (LFI)\nLdap Enumeration - ldapsearch\nGaining SSH access through a dual socks5 proxy\nAbusing sudoers privilege [dpkg] [Privilege Escalation]\nEXTRA: Managing connection flow with netsh from the Windows machine\nEXTRA: Playing with netsh + socat + Socks5 Proxy (chisel) to make the second internal network accessible\nEXTRA: Reverse shells and resource offloading through 2 internal networks",
    certification: "eWPT\neJPT\neCPPTv2\neCPTXv2",
    ip: "https://www.vulnhub.com/entry/symfonos-52,415/",
    video: "https://www.youtube.com/watch?v=E4eUdAd6tAM",
  },
  {
    platform: "VulnHub",
    name: "Symfonos 6",
    os: "Linux",
    state: "Media",
    techniques:
      "Note: On this machine we have configured an internal network to Pivot to Empire: Breakout\nWeb Enumeration\nFlySpray Exploitation\nAbusing FlySpray - Cross Site Scripting (XSS)\nGetting the administrator to create a new privileged user through XSS\nInformation Leakage\nGitlab Enumeration\nAbusing API + Preg_Replace to achieve RCE on the creation of a new post\nAbusing sudoers privilege (go) [Privilege Escalation]\nEXTRA: System Enumeration with Pwncat-CS\nEXTRA: Pivoting Lab with Breakout",
    certification: "eWPT\neWPTXv2\nOSWE\neCPPTv2\neCPTXv2",
    ip: "https://www.vulnhub.com/entry/symfonos-61,458/",
    video: "https://www.youtube.com/watch?v=sjUgh__Utvs",
  },
  {
    platform: "VulnHub",
    name: "Empire: Breakout",
    os: "Linux",
    state: "Fácil",
    techniques:
      "EXTRA: Creation of bash script to discover computers on the internal network\nEXTRA: Creation of a bash script to discover the open ports of the computers discovered in the internal network\nEXTRA: Remote Port Forwarding - Playing with Chisel (From Symfonos 6)\nEXTRA: Local Port Forwarding - Playing with SSH (From attacker machine)\nEXTRA: Socks5 connection with Chisel (Pivoting) (From Symfonos 6)\nEXTRA: FoxyProxy + Socks5 Tunnel\nEXTRA: Port scanning with nmap through proxychains + Xargs\nDealing with esoteric language - Brainfuck\nRPC Enumeration\nRPC RID Cycling Attack (Manual brute force) - Discovering valid system users\nRPC lookupnames + Xargs Speed Boost TIP - Discovering valid system users (Alternative way)\nAbusing Usermin Panel [RCE]\nControlling the flow of connections and sending a reverse shell\nAbusing TAR cap_dac_read_search capabilitie [Privilege Escalation]",
    certification: "eWPT\neWPTXv2\neCPPT\neCPTXv2\nOSWE",
    ip: "https://www.vulnhub.com/entry/empire-breakout,751/",
    video: "https://www.youtube.com/watch?v=sjUgh__Utvs",
  },
  {
    platform: "VulnHub",
    name: "ICA: 1",
    os: "Linux",
    state: "Fácil",
    techniques:
      "Reconfiguring machine interfaces for correct IP assignment via dhcp [Small bypass to circumvent the password]\nAbusing qdPM 9.2 - Password Exposure (Unauthenticated)\nRemote connection to the MYSQL service and obtaining user credentials\nSSH brute force with Hydra\nAbusing relative paths in a SUID binary - Path Hijacking [Privilege Escalation]",
    certification: "eJPT",
    ip: "https://www.vulnhub.com/entry/ica-1,748/",
    video: "https://www.youtube.com/watch?v=FvXg6U1wBY4",
  },
  {
    platform: "VulnHub",
    name: "Corrosion 2",
    os: "Linux",
    state: "Fácil",
    techniques:
      "Note: On this machine we have configured an internal network to Pivot to Empire: Corrosion 1\nWeb Enumeration\nInformation Leakage + Cracking ZIP File\nAbusing Tomcat - Creating a malicious WAR file [RCE]\nAbusing SUID Binary - Reading privileged files\nCracking Hashes\nManipulating the code of a Python library with incorrectly configured permissions [Privilege Escalation]\nEXTRA: Pivoting Lab with Corrosion 1",
    certification: "eJPT\neCPPTv2",
    ip: "https://www.vulnhub.com/entry/corrosion-2,745/",
    video: "https://www.youtube.com/watch?v=Mc4FuBRyybc",
  },
  {
    platform: "VulnHub",
    name: "Corrosion 1",
    os: "Linux",
    state: "Media",
    techniques:
      "EXTRA: Creation of bash script to discover computers on the internal network\nEXTRA: Creation of a bash script to discover the open ports of the computers discovered in the internal network\nEXTRA: Remote Port Forwarding - Playing with Chisel (From Corrosion 2)\nEXTRA: Socks5 connection with Chisel (Pivoting) (From Symfonos 6)\nEXTRA: FoxyProxy + Socks5 Tunnel\nEXTRA: Port scanning with nmap through proxychains + Xargs\nEXTRA: Fuzzing with gobuster through a Socks5 Proxy\nLocal File Inclusion (LFI)\nLFI + RCE via SSH Log Poisoning (auth.log)\nEXTRA: Reverse shell playing with socat to make the shell travel from an intermediary computer to us\nCracking ZIP file\nEXTRA: SSH over Proxychains\nAbusing sudoers privilege + Creating and compiling malicious C file [Privilege Escalation]",
    certification: "eCPPTv2\neWPT",
    ip: "https://www.vulnhub.com/entry/corrosion-1,730/",
    video: "https://www.youtube.com/watch?v=Mc4FuBRyybc",
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const newData = []
  const childNodesRequire = 10
  const regExpIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i
  const regExpVideo = /https:\/\/www.youtube.com/i

  // CALL SERVICE
  const response = await axios.get(
    "https://spreadsheets.google.com/tq?tqx=out:html&tq=&key=1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA&gid=1"
  )

  const data = parse(response.data)
  const tbody = data.querySelector("table")

  if (!tbody?.childNodes) return console.log("Not found")

  for (const info of tbody.childNodes) {
    const total = info.childNodes.length ?? 0

    if (total !== childNodesRequire) continue

    const machineIp = info.childNodes[2].innerText.trim()
    const machineVideo = info.childNodes[7].innerText.trim()

    if (regExpIp.test(machineIp) && regExpVideo.test(machineVideo)) {
      newData.push({
        platform: "HackTheBox",
        name: info.childNodes[1].innerText.trim(),
        ip: machineIp,
        os: info.childNodes[3].innerText.trim(),
        state: info.childNodes[4].innerText.trim(),
        techniques: info.childNodes[5].innerText.trim(),
        certification: info.childNodes[6].innerText.trim(),
        video: machineVideo,
      })
    }
  }

  res.status(200).json({
    newData: [...newData, ...vulnHub],
    total: {
      htb: newData.length,
      vuln: vulnHub.length,
    },
  })
}
