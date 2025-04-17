import { Box, Typography } from "@mui/material"

function Footer() {
    return (
      <>
        <Box sx={{maxWidth: '1200px', marginX: 'auto', background: '#FBFBFB', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between', paddingX: '23px', paddingY: '33px'}}>
          <Box sx={{display: 'flex', justifyContent: {xs: 'center', md: "space-between"}, gap: {xs: '100px', md: "0"}, width: {xs: '100%', md: '40%'}}}>
            <Box>
              <Typography variant="h5" sx={{fontWeight: '700', fontSize: '18px', color:'#3D3D3D', marginBottom: '20px'}}>My Account</Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>My Account</Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Address</Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Wishlist</Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{fontWeight: '700', fontSize: '18px', color:'#3D3D3D', marginBottom: '20px'}}>Categories</Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>House Plants
              </Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Potter Plants
              </Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Seeds
              </Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Small Plants
              </Typography>
              <Typography variant="subtitle1" sx={{fontWeight: '400', fontSize: '14px', color:'#3D3D3D', marginBottom: '8px'}}>Accessories
              </Typography>
            </Box>
          </Box>
          <Box sx={{marginX: {sm: '100px', md: '0'}}}>
            <Typography variant="h5" sx={{fontWeight: '700', fontSize: '18px', color:'#3D3D3D', marginBottom: '20px'}}>Social Media</Typography>
            <Box sx={{display: 'flex', gap: '10px', marginBottom: '33px'}}>
              <Box sx={{display: 'flex', width: '30px', cursor: "pointer", justifyContent: 'center', alignItems: 'center', height: '30px', border: '1px solid #46A35833', borderRadius: '4px'}}>
                <img src="/footer/Facebook.svg" className="w-[8px]" alt="facebook" />
              </Box>
              <Box sx={{display: 'flex', width: '30px', cursor: "pointer", justifyContent: 'center', alignItems: 'center', height: '30px', border: '1px solid #46A35833', borderRadius: '4px'}}>
                <img src="/footer/Instagram.svg" className="w-[14px]" alt="facebook" />
              </Box>
              <Box sx={{display: 'flex', width: '30px', cursor: "pointer", justifyContent: 'center', alignItems: 'center', height: '30px', border: '1px solid #46A35833', borderRadius: '4px'}}>
                <img src="/footer/Twitter.svg" className="w-[16px]" alt="facebook" />
              </Box>
              <Box sx={{display: 'flex', width: '30px', cursor: "pointer", justifyContent: 'center', alignItems: 'center', height: '30px', border: '1px solid #46A35833', borderRadius: '4px'}}>
                <img src="/footer/Linkedin.svg" className="w-[14px]" alt="facebook" />
              </Box>
              <Box sx={{display: 'flex', width: '30px', cursor: "pointer", justifyContent: 'center', alignItems: 'center', height: '30px', border: '1px solid #46A35833', borderRadius: '4px'}}>
                <img src="/footer/Union.svg" className="w-[18px]" alt="facebook" />
              </Box>
            </Box>
            <Typography variant="h5" sx={{fontWeight: '700', fontSize: '18px', color:'#3D3D3D', marginBottom: '20px'}}>We accept</Typography>
            <img src="/footer/payload.png" className="cursor-pointer" alt="" />
          </Box>
          <Box></Box>
        </Box>
        <Typography sx={{fontSize: {xs: '10px', md: '14px'}}} className="text-center font-[400] leading-[30px] text-[#3D3D3D] py-[10px]">© 2021 GreenShop. All Rights Reserved.</Typography>
      </>
    )
  }
  
  export default Footer