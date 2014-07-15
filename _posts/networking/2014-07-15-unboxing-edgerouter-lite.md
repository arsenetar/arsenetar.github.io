---
layout: post
title: Unboxing EdgeRouter Lite
description: Unboxing of the Ubiquiti EdgeRouter Lite Gigabit Wired Router.
tags: [routers, networking]
comments: true
---

Today, I received the [Ubiquity EdgeRouter Lite](http://www.ubnt.com/edgemax/edgerouter-lite/)
as a replacement to my current [pfSense](https://pfsense.org/) router. I have
been using pfSense on a custom computer for the past few years and got the
EdgeRouter Lite as an attempt to reduce power consumption (pfSense system uses
56W via Kill-a-Watt).  I will follow up this review with a more detailed comparison between the
two setups after I have used the EdgeRouter Lite for a month or so.  Anyhow
without further back-story, the unboxing:

## Packaging
The EdgeRouter Lite comes in a standard retail box with product images and basic
specifications around the box. The front of the box shows an image of the router
as an isometric view.  The device I received is the newer version which has the
metal casing instead of the original version's plastic cover.

![Box Front]({{ site.url }}/images/2014-07-15/BoxFront.JPG)

The first side of the box shows ta couple screenshots of the web interface which
seems fairly user friendly and lists the default IP and user information.

![Box Side 1]({{ site.url }}/images/2014-07-15/BoxSide1.JPG)

The back of the box shows the top and front views of the router showing the three
Ethernet ports, the console port and the reset switch.

![Box Back]({{ site.url }}/images/2014-07-15/BoxBack.JPG)

The second side of the box shows some of the product specifications and lists the
box contents.

![Box Side 2]({{ site.url }}/images/2014-07-15/BoxSide2.JPG)

Upon opening the top of the box a formed cardboard tray pulls out to reveal the
quick start guide on top of the router.  Below the router is the power supply and
mounting screws.

![Box Inside]({{ site.url }}/images/2014-07-15/BoxInside.JPG)

Overall, the packaging seems decent and is what I would expect for a product of
this type.

## Contents
Moving on, removing the contents from the packaging gives a better idea about the
device.  The contents are shown below and consist of the quick start guide, the
router, the power supply (3.5 ft cord), 2ft power supply cable, and mounting
hardware.

![Contents]({{ site.url }}/images/2014-07-15/Contents.JPG)

The power supply is a custom branded 12 Volt 1 Amp supply (12W out max) capable
of accepting 100-240 Volt AC.  This alone shows that the router should be much
more power efficient than my pfSense setup.

![Power Supply]({{ site.url }}/images/2014-07-15/PowerSupply.JPG)

Should the router be wall mounted, screws and plugs have been included, however
I prefer to use drywall screws instead of the screws and plugs provided with
these sort of devices.

![Screws]({{ site.url }}/images/2014-07-15/Screws.JPG)

## Physical
The router is enclosed in a two piece metal enclosure which is held together by
three small screws in the back and a lip in the front.  The casing feels sturdy
enough and has perforations on the top and three sides to assist in heat dissipation.
The top of the router has the Ubiquiti logo and the device name in the center.

![Router Top]({{ site.url }}/images/2014-07-15/RouterTop.JPG)

The front of the router contains the three Ethernet ports each 1000Mbps  (1Gbps)
labeled `eth0-2`.  Next to them is the legend for the indicator lights.  The console
port is to the left and is labeled `CONSOLE`.  The console port is for use with
the Cisco style cable and a COM port.  On the far right is the reset switch for
if/when things go wrong.

![Router Front]({{ site.url }}/images/2014-07-15/RouterFront.JPG)

Moving to the back of the router has the DC power input jack and the grounding
clamp.

![Router Back]({{ site.url }}/images/2014-07-15/RouterBack.JPG)

The bottom of the router has four small rubber feet for setting the device on
a flat surface.  Given the low weight of the device though it may want to slide
once cables are connected though.  Across the center are the two mounting holes
which are setup to allow vertical or horizontal mounting of the device.

![Router Bottom]({{ site.url }}/images/2014-07-15/RouterBottom.JPG)

## Initial Setup
The quick start guide covers the basic details of the device and what the lights
mean.  The guide also suggest using CAT 5 or better cable (I recommend CAT 5e or 6).
Instructions for wall mounting are provided with the screw spacing and clearance.
Overall the guide is well written and illustrated.

Powering up the unit results in the green light on the `CONSOLE` port turning on,
this light is used as a power indicator as stated in the quick start guide.  For
initial setup a computer needs to be connected to the `eth0` port and configured
with a static IP in the `192.168.1.x` range.  Then by opening a browser and pointing
it to `192.168.1.1` the web interface of the router is reached.
I received the yellow SSL security warning page in chrome, however I choose to
ignore the warning. This then results in a login screen with a license agreement.
At this screen the default username and password of `ubnt` is used to continue.

![Login Page]({{ site.url }}/images/2014-07-15/Login.PNG)

Upon logging in the dashboard is reached.

![Initial Dashboard]({{ site.url }}/images/2014-07-15/InitialDashboard.PNG)

Since a new system image is available I download it off of the Ubiquiti site at
http://ubnt.com/download/  The current version is `v1.50`, installed was `v1.20`.
To update the firmware, the `system` tab at the bottom of the web UI is clicked
which brings up a panel, scrolling down to the bottom of the panel reveals the
`Upgrade System Image` section. I admit this threw me off for a few seconds as
I was expecting the upgrade to be in a tab at the top right or in the toolbox,
but instead is at the bottom left.  This position however is fine as system
settings will not be adjusted as frequently.

![System Panel]({{ site.url }}/images/2014-07-15/SystemPanel.PNG)

After uploading the new firmware the router prompts to reboot.  After waiting for
the router to reboot and logging back in the, the dashboard is reached. A few
minor things have changed, the indicator at the top of the page now works and
shows the port, CPU, and RAM usage.  Additionally now there are `Firewall/NAT`,
`VPN`, and `Wizard` tabs.

![Dashboard]({{ site.url }}/images/2014-07-15/Dashboard.PNG)

Since I am using the router as a simple home networking router with one WAN and
one LAN port I will use the setup wizard to get started. I select the `WAN+2LAN`
wizard. The wizard is fairly straightforward, since I am using a DHCP connection
I leave everything with the defaults and select Apply. Since the router is only
connected to my computer the internet connectivity test fails.  I decide to finish
setting up the router before swapping it out with my existing one.

![Wizard]({{ site.url }}/images/2014-07-15/Wizard.PNG)

As recommended by Ubiquiti, I add a new user to the router and remove the old `ubnt`
user.  This is accomplished via the `Users` tab.

![Users Tab]({{ site.url }}/images/2014-07-15/UsersTab.PNG)

At this point I configure a few of the options specific to my setup such as the
system hostname and domain.  Additionally I use the UPnP wizard to setup UPnP on my first
local network `eth0` to WAN `eth1`. Now I replace my existing pfSense router with
the EdgeRouter Lite.

## Using the EdgeRouter
I am not going to go into as much detail in this section as there are many options,
which can be set.  After replacing my old router and confirming internet connectivity,
I worked to tweak the last few settings and test out the performance of the
router. After running some speed tests the router was still able to max my bandwidth
(50Mbps/10Mpbs Comcast) which is really no surprise.

The software interface is much nicer looking than most routers and is pretty
responsive, although saving settings takes some time.  Configuring the DHCP settings
and static leases is very straightforward. Firewall configuration is about the
same level of difficulty and granularity as pfSense which is good for advanced
users but may confuse those who are beginners or average users.  The good news
is without adjusting the firewall the WAN connection works fine, and port forwarding
is very straightforward.

![Port Forwarding]({{ site.url }}/images/2014-07-15/PortForwarding.PNG)

Although most features are comparable to pfSense, the EdgeRouter appears to be
missing a few configuration options which pfSense has, now this may be that they
are buried in the UI or available via CLI only.  These features are mainly more
advanced and not required by probably 80-90% of users.  I'll go into more detail
in the follow up review.

## Closing thoughts
The device seems built well, looks good (well as good as I want a router to look),
and seems to preform as well as my old pfSense setup.  Preliminary measurements
put power consumption at 7.7W (Kill-a-Watt).  This power consumption is about 1/7 of the pfSense
setup.  As a size comparison the old pfSense system and the EdgeRouter Lite side
by side is shown below. (pfSense system is Intel Core 2 Duo, 1GB RAM, 32GB SSD,
1 Integrated 1Gb NIC, and 1 PCIE Intel 1Gb NIC.)

![Size Comparison]({{ site.url }}/images/2014-07-15/SizeComparison.JPG)

The web UI is fairly easy to use and so far all options which I want to
configure can be easily changed without using the CLI.  After running the device
for this setup and using it "in production" it runs a bit on the warm side, but
is approximately what I would expect for this type of equipment (seems about the
same temp as my Motorola Surfboard cable modem).  As of right now I think this
EdgeRouter Lite is a capable home networking and possible SMB router with a good
set of features.

| Area        | Score      |
|-------------|------------|
| Physical    | 9/10       |
| Setup       | 9/10       |
| Ease of Use | 8/10       |
| Features    | 8/10       |
| **Average** | **8.5/10** |

Overall the Ubiquiti EdgeRouter Lite is a very solid product and still has active
development of the firmware after over a year of being released, which is hard
to say about many other routers.  This is a recommended product for anyone who
doesn't mind learning a small amount about networking.
