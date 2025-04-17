import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

function Blog() {
  return (
    <div className="max-w-[1200px] bg-[#FBFBFB] px-[40px] md:px-[40px]  mx-auto pt-[40px] pb-[100px]">
        <h1 className="text-[30px] font-[700] leading-[16px] text-[#3D3D3D] mb-[15px] text-center">Our Blog Posts</h1>
        <p className="text-[14px] font-[400] leading-[24px] text-[#727272] mb-[35px] text-center">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[43px]">
        <Card sx={{ maxWidth: 345 , marginX: 'auto'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/blog/01.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{fontSize: '14px', color: '#46A358', fontWeight: '500', lineHeight: '16px', marginBottom: '4px'}}>
                    September 12  I Read in 6 minutes
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#3D3D3D', fontWeight: '700', lineHeight: '26px', marginBottom: '4px'}} gutterBottom variant="h5" component="div">
                    Cactus & Succulent 
                    Care Tips
                </Typography>
                <Typography  variant="body2" sx={{fontSize: '14px', color: '#727272', fontWeight: '400', lineHeight: '22px', marginBottom: '9px'}}>
                    Cacti are succulents are easy care plants for any home or patio. 
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{fontSize: '14px', color: '#3D3D3D', fontWeight: '500', lineHeight: '16px'}}>
                        Read More
                    </Typography>
                    <img src="/blog/Arrow - Right.svg" alt="" />
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 , marginX: 'auto'  }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/blog/02.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{fontSize: '14px', color: '#46A358', fontWeight: '500', lineHeight: '16px', marginBottom: '4px'}}>
                    September 13  I Read in 2 minutes
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#3D3D3D', fontWeight: '700', lineHeight: '26px', marginBottom: '4px'}} gutterBottom variant="h5" component="div">
                    Top 10 Succulents for
                    Your Home
                </Typography>
                <Typography  variant="body2" sx={{fontSize: '14px', color: '#727272', fontWeight: '400', lineHeight: '22px', marginBottom: '9px'}}>
                    Best in hanging baskets. Prefers medium to high light. 
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{fontSize: '14px', color: '#3D3D3D', fontWeight: '500', lineHeight: '16px'}}>
                        Read More
                    </Typography>
                    <img src="/blog/Arrow - Right.svg" alt="" />
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 , marginX: 'auto'  }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/blog/03.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{fontSize: '14px', color: '#46A358', fontWeight: '500', lineHeight: '16px', marginBottom: '4px'}}>
                    September 15  I Read in 3 minutes
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#3D3D3D', fontWeight: '700', lineHeight: '26px', marginBottom: '4px'}} gutterBottom variant="h5" component="div">
                    Cacti & Succulent 
                    Care Tips
                </Typography>
                <Typography  variant="body2" sx={{fontSize: '14px', color: '#727272', fontWeight: '400', lineHeight: '22px', marginBottom: '9px'}}>
                    Cacti and succulents thrive in containers and because most are..
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{fontSize: '14px', color: '#3D3D3D', fontWeight: '500', lineHeight: '16px'}}>
                        Read More
                    </Typography>
                    <img src="/blog/Arrow - Right.svg" alt="" />
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 , marginX: 'auto'  }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/blog/01.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography sx={{fontSize: '14px', color: '#46A358', fontWeight: '500', lineHeight: '16px', marginBottom: '4px'}}>
                    September 15  I Read in 2 minutes
                </Typography>
                <Typography sx={{fontSize: '20px', color: '#3D3D3D', fontWeight: '700', lineHeight: '26px', marginBottom: '4px'}} gutterBottom variant="h5" component="div">
                    Best Houseplants 
                    Room by Room
                </Typography>
                <Typography  variant="body2" sx={{fontSize: '14px', color: '#727272', fontWeight: '400', lineHeight: '22px', marginBottom: '9px'}}>
                    The benefits of houseplants are endless. In addition to..
                </Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography sx={{fontSize: '14px', color: '#3D3D3D', fontWeight: '500', lineHeight: '16px'}}>
                        Read More
                    </Typography>
                    <img src="/blog/Arrow - Right.svg" alt="" />
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    </div>
  )
}

export default Blog